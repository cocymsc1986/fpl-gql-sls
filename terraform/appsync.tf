resource "aws_appsync_graphql_api" "appsync" {
  name                = "${var.prefix}_appsync"
  schema              = file("../schema.graphql")
  authentication_type = "API_KEY"
}

resource "aws_appsync_api_key" "appsync_api_key" {
  api_id = aws_appsync_graphql_api.appsync.id
}

# Create data source in appsync from lambda function.
resource "aws_appsync_datasource" "fpl_gql_datasource" {
  name             = "${var.prefix}_datasource"
  api_id           = aws_appsync_graphql_api.appsync.id
  service_role_arn = aws_iam_role.iam_appsync_role.arn
  type             = "AWS_LAMBDA"
  lambda_config {
    function_arn = aws_lambda_function.fpl_gql.arn
  }
}

# player(id: Int): Player
# playersByTeam(team: Int): PlayersByTeam
# playerWithHighestProp(prop: String): PlayerWithHighestProp
# playerWithLowestProp(prop: String): PlayerWithLowestProp
# playersByProp(prop: String, amount: Int, reverseOrder: Boolean): PlayersByProp
# playersByPropAndPos(prop: String, position: String, amount: Int, reverseOrder: Boolean): PlayersByPropAndPos
# allTeams: AllTeams
# team(id: Int): Team
# fixtures(id: Int): Fixtures
# getTeamsFixtures(id: Int, amount: Int): GetTeamsFixtures
# getAllTeamsFixtures: GetAllTeamsFixtures
# playersSearch(term: String, amount: Int): PlayersSearch
# eventStatus: EventStatus

resource "aws_appsync_resolver" "player_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "player"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}
