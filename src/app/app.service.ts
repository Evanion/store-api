import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <html>
      <head>
        <title>Store example</title>
      </head>
      <body>
        <h1>Store example</h1>
        <p>Example API for a ecommerce store</p>
        <p>See the <a href="/api">API documentation</a></p>
        <p>See the <a href="/graphql">GraphQL playground</a></p>
      </body>
    </html>
    `;
  }
}
