const env: EnvironmentVariables = {};

export function initEnv() {
    env.PORT = process.env["PORT "] || 8080;
}

export {env};