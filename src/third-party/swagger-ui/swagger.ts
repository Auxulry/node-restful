import SwaggerJSDoc from 'swagger-jsdoc';

const SwaggerOptions: SwaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Restful',
      version: '1.0.0',
      description: 'Node Resful API Specification',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['src/interfaces/routes/*.router.ts']
};

const SwaggerSpec = SwaggerJSDoc(SwaggerOptions);

export default SwaggerSpec;