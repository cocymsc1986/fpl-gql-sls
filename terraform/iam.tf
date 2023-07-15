# Lambda role
data "aws_iam_policy_document" "iam_lambda_role_document" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "iam_cloudwatch_logging_document" {
  statement {
    actions = [
      "logs:CreateLogStream",
      "logs:CreateLogDelivery",
      "logs:PutLogEvents"
    ]
    resources = [
      "arn:aws:logs:*:*:*"
    ]
  }
}

resource "aws_iam_policy" "iam_lambda_logging_policy" {
  name   = "${var.prefix}_iam_lambda_logging_policy"
  policy = data.aws_iam_policy_document.iam_cloudwatch_logging_document.json
}

resource "aws_iam_role" "iam_lambda_role" {
  name               = "${var.prefix}_iam_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.iam_lambda_role_document.json
}

# Attach logging policy to Lambda role.
resource "aws_iam_role_policy_attachment" "lambda_logging" {
  role       = aws_iam_role.iam_lambda_role.name
  policy_arn = aws_iam_policy.iam_lambda_logging_policy.arn
}

# Appsync role
data "aws_iam_policy_document" "iam_appsync_role_document" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["appsync.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "iam_appsync_role" {
  name               = "${var.prefix}_iam_appsync_role"
  assume_role_policy = data.aws_iam_policy_document.iam_appsync_role_document.json
}

# Invoke Lambda policy
data "aws_iam_policy_document" "iam_invoke_lambda_policy_document" {
  statement {
    actions   = ["lambda:InvokeFunction"]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "iam_invoke_lambda_policy" {
  name   = "${var.prefix}_iam_invoke_lambda_policy"
  policy = data.aws_iam_policy_document.iam_invoke_lambda_policy_document.json
}

# Attach Invoke Lambda policy to AppSync role.
resource "aws_iam_role_policy_attachment" "appsync_invoke_lambda" {
  role       = aws_iam_role.iam_appsync_role.name
  policy_arn = aws_iam_policy.iam_invoke_lambda_policy.arn
}
