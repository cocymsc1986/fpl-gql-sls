data "archive_file" "lambda_fpl" {
  type = "zip"

  source_dir  = "../dist"
  output_path = "../lambda.zip"
}

resource "aws_s3_object" "lambda_fpl" {
  bucket = aws_s3_bucket.lambda_bucket.id

  key    = "lambda.zip"
  source = data.archive_file.lambda_fpl.output_path

  etag = filemd5(data.archive_file.lambda_fpl.output_path)
}

resource "aws_lambda_function" "fpl_gql" {
  function_name = "fpl_gql"

  s3_bucket = aws_s3_bucket.lambda_bucket.id
  s3_key    = aws_s3_object.lambda_fpl.key

  runtime = "nodejs18.x"
  handler = "index.graphql"

  source_code_hash = data.archive_file.lambda_fpl.output_base64sha256

  role = aws_iam_role.iam_lambda_role.arn
}

resource "aws_cloudwatch_log_group" "fpl_gql" {
  name = "/aws/lambda/${aws_lambda_function.fpl_gql.function_name}"

  retention_in_days = 30
}
