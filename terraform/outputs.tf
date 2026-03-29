output "function_name" {
  description = "Name of the Lambda function."

  value = aws_lambda_function.fpl_gql.function_name
}

output "lambda_bucket_name" {
  description = "Name of the S3 bucket used to store function code."

  value = aws_s3_bucket.lambda_bucket.id
}

output "appsync_url" {
  description = "AppSync GraphQL endpoint URL."

  value = aws_appsync_graphql_api.appsync.uris["GRAPHQL"]
}

output "appsync_api_key" {
  description = "AppSync API key (include as x-api-key header in requests)."

  value     = aws_appsync_api_key.appsync_api_key.key
  sensitive = true
}
