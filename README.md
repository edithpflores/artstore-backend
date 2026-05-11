# ArtStore DevOps Platform - Backend

Backend service for the ArtStore DevOps project.

This project demonstrates the implementation of DevOps practices including CI/CD pipelines, Docker containerization, Kubernetes deployments, Infrastructure as Code with Terraform, monitoring with Azure Application Insights, and multi-environment deployments using Azure DevOps.

---

# Project Overview

The ArtStore platform is a sample application designed to manage art products through a REST API.

The primary objective of the project is to demonstrate modern DevOps workflows and cloud deployment practices.

---

# Features

- REST API with Express.js
- Docker containerization
- Azure DevOps CI/CD pipelines
- Dev and Production deployment stages
- Kubernetes deployment with Minikube
- Docker Hub image publishing
- Azure Application Insights monitoring
- Infrastructure repository with Terraform
- Pull Request workflow and branch strategy
- GitHub Projects traceability

---

# Technology Stack

## Backend
- Node.js
- Express.js

## DevOps
- Docker
- Kubernetes
- Minikube
- Azure DevOps Pipelines
- Terraform

## Monitoring
- Azure Application Insights
- Azure Log Analytics

## Source Control
- GitHub
- Pull Requests
- Feature branch strategy

---

# API Endpoints

## Health Check

GET `/`

Returns application status.

Example response:

```json
{
  "message": "ArtStore API is running - DevOps Pipeline Active"
}
```

---

## Products

GET `/products`

Returns sample product data.

Example response:

```json
[
  {
    "id": 1,
    "name": "Painting"
  },
  {
    "id": 2,
    "name": "Sculpture"
  }
]
```

---

# CI/CD Workflow

The backend pipeline includes:

1. Source code checkout
2. Dependency installation
3. Unit testing
4. Docker image build
5. Docker Hub push
6. Deployment to Dev environment
7. Manual approval for Production
8. Deployment to Production

---

# Branch Strategy

| Branch | Purpose |
|---|---|
| main | Stable production-ready code |
| feature/* | New features and changes |
| develop | Integration branch |

---

# Monitoring

Azure Application Insights is configured to collect:

- Request telemetry
- Performance metrics
- Exceptions
- Console logs
- Dependency tracking

---

# Infrastructure

Infrastructure resources are managed separately in the `artstore-infra` repository using Terraform.

Resources include:

- Azure Resource Group
- Azure Monitoring Resources
- Log Analytics Workspace

---

# Local Development

## Install dependencies

```bash
npm install
```

## Run application

```bash
node index.js
```

Application runs on:

```text
http://localhost:3000
```

---

# Docker

## Build image

```bash
docker build -t artstore-backend .
```

## Run container

```bash
docker run -p 3000:3000 artstore-backend
```

---

# Kubernetes Deployment

The application can be deployed locally using Minikube and Kubernetes manifests.

Deployment files are located in:

```text
k8s/
```

---

# Future Improvements

- Improved frontend UI/UX
- Expanded unit testing coverage
- Secret management improvements
- Enhanced monitoring dashboards
- Database integration

---

# Author

Edith Flores  
ITESO - DevOps Project