# NestJS bootstrap template

## Description

The NestJS Bootstrap Template is a robust, scalable, and production-ready starting point for building enterprise-grade backend applications using the NestJS framework. It comes with a suite of essential features out of the box, aimed at reducing development time while ensuring high standards in performance, security, and maintainability.

## **Key Features**

### 1. **Standard Project Structure:**

- A well-organized and modular architecture following NestJS best practices.
- Pre-configured environments for both development and production to ensure smooth transitions.

### 2. **Logging:**

- Centralized logging using Winston for structured and flexible log management.
- Logs are customizable to include varying levels such as error, warn, info, debug, and more, making it easier to monitor and troubleshoot.

### 3. **API Documentation:**

- Swagger API documentation integrated out-of-the-box, providing automatically generated and interactive API docs.
- Support for versioning, allowing multiple API versions to be documented and served simultaneously.

### 4. **API Versioning:**

- Fully configured API versioning strategy, making it easy to support different versions of the API for backward compatibility.
- Ensures smooth upgrades and transitions for clients using different versions of the service.

### 5. **Configuration Management:**

- Centralized configuration management using config files (like app-config.json), making it easy to manage different environment-specific settings.
- Sensitive configurations like API keys, credentials, and secrets are stored safely, supporting both development and production environments.

## **Folder Structure**

````bash
nestjs-bootstrap-template/
├── dist/                   # Compiled output
├── src/                    # Source files for the application
│   ├── config/             # Configuration files
│   │   ├── app-config/     # Application-specific configuration files
│   │   │   └── app-config.json  # Environment config
│   ├── modules/            # Application modules (feature-specific)
│   │   └── example/        # Example feature module
│   │       ├── example.controller.ts  # Controller for the example module
│   │       ├── example.service.ts     # Service for the example module
│   │       └── example.module.ts      # NestJS module for example feature
│   ├── shared/             # Common utilities, interceptors, filters, pipes
│   ├── main.ts             # Entry point for the application
│   └── app.module.ts       # Root module of the application
├── test/                   # Unit and integration tests
├── nest-cli.json           # NestJS CLI configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # NPM dependencies and scripts
└── README.md               # Documentation


## Installation

```bash
$ npm install
````

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
