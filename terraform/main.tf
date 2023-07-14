terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "fpl-gql-tfstate"
    key    = "terraform.tfstate"
    region = "us-east-1"
   }
}

provider "aws" {
  profile = var.aws_credentials_profile
  region  = var.region
}
