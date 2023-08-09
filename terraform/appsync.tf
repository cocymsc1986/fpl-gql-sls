resource "aws_appsync_graphql_api" "appsync" {
  name                = "${var.prefix}_appsync"
  schema              = file("../schema.graphql")
  authentication_type = "API_KEY"
}

resource "aws_appsync_api_key" "appsync_api_key" {
  api_id = aws_appsync_graphql_api.appsync.id
  expires = "2030-05-03T04:00:00Z"
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

resource "aws_appsync_resolver" "player_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "player"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "playersByTeam_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "playersByTeam"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "playerWithHighestProp_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "playerWithHighestProp"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "playerWithLowestProp_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "playerWithLowestProp"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "playersByProp_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "playersByProp"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "playersByPropAndPos_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "playersByPropAndPos"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "allTeams_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "allTeams"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "team_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "team"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "fixtures_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "fixtures"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "getTeamsFixtures_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "getTeamsFixtures"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "getAllTeamsFixtures_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "getAllTeamsFixtures"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "playersSearch_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "playersSearch"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

resource "aws_appsync_resolver" "eventStatus_resolver" {
  api_id      = aws_appsync_graphql_api.appsync.id
  type        = "Query"
  field       = "eventStatus"
  data_source = aws_appsync_datasource.fpl_gql_datasource.name

  request_template  = file("../mapping-templates/common-request.vtl")
  response_template = file("../mapping-templates/common-response.vtl")
}

