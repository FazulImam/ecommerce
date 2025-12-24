/**
 * Performance Configuration for Node.js Application
 * Contains performance optimization settings and monitoring utilities
 */

// Performance monitoring and optimization settings
const performanceConfig = {
  // Memory and garbage collection settings
  memory: {
    maxOldSpaceSize: 4096, // 4GB max heap size
    gcInterval: 30000, // Garbage collection interval in ms
  },
  
  // HTTP performance settings
  http: {
    keepAlive: true,
    keepAliveTimeout: 5000,
    maxSockets: 100,
    maxFreeSockets: 10,
    freeSocketTimeout: 30000,
  },
  
  // Caching settings
  cache: {
    staticAssets: {
      maxAge: 31536000, // 1 year for static assets
    },
    views: {
      maxAge: 300, // 5 minutes for dynamic views
    },
  },
  
  // Performance monitoring
  monitoring: {
    enableLogging: true,
    logInterval: 60000, // Log performance stats every minute
    slowRequestThreshold: 1000, // Log requests taking more than 1 second
  },
};

module.exports = performanceConfig;