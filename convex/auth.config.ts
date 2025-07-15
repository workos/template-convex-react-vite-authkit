const authConfig = {
  providers: [
    {
      // WorkOS JWT configuration
      // Make sure to configure WORKOS_CLIENT_ID and WORKOS_CLIENT_SECRET
      // in your Convex dashboard environment variables
      domain: process.env.WORKOS_JWT_ISSUER_DOMAIN!,
      applicationID: process.env.WORKOS_CLIENT_ID,
    },
  ],
};

export default authConfig;
