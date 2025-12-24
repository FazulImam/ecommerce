# E-commerce Application - Performance Optimized

This is a performance-optimized Express.js e-commerce application with optimized build processes and performance monitoring capabilities.

## Performance Optimizations

### Code Performance Optimizations:
1. **Express Middleware Optimization**: 
   - Replaced `body-parser` with native Express methods (`express.json()` and `express.urlencoded()`)
   - Added caching headers for static assets (1 year cache)
   - Implemented proper cache control for dynamic content

2. **Response Time Optimization**:
   - Added performance monitoring middleware to track request timing
   - Implemented proper HTTP caching strategies
   - Added security headers for better performance and security

3. **Controller Optimizations**:
   - Added proper caching headers for different page types
   - Improved request handling with proper input validation patterns
   - Added performance monitoring for individual routes

### Build Process Optimizations:
1. **NPM Scripts**:
   - `npm run build`: Full build optimization process
   - `npm run build:clean`: Clean previous builds
   - `npm run build:deps`: Install only production dependencies
   - `npm run build:optimize`: Prune unnecessary packages

2. **Docker Optimization**:
   - Multi-stage build ready configuration
   - Alpine Linux base image for smaller footprint
   - Non-root user for security
   - Production-only dependencies installation

3. **Build Script**:
   - Automated build optimization script (`build-optimization.sh`)
   - Removes unnecessary files and dependencies
   - Optimizes dependency installation

## Performance Monitoring

### Clinic.js Integration
The application includes Clinic.js for performance analysis:
- Install with: `npm install -g clinic`
- Run performance analysis: `clinic doctor -- node app.js`
- Generate flame graphs: `clinic flame -- node app.js`

### Built-in Performance Tracking
- Request timing is logged to console
- Response time tracking for all routes
- Performance metrics collection

## Setup and Deployment

### Development:
```bash
npm install
npm run dev
```

### Production:
```bash
npm run build
npm start
```

### Docker Deployment:
```bash
# Build the image
docker build -t ecommerce-app .

# Run the container
docker run -p 5000:5000 ecommerce-app
```

### Performance Analysis:
```bash
# Run performance analysis
npm run perf:check  # If clinic is installed
```

## Key Performance Improvements

1. **Reduced Bundle Size**: Removed unnecessary dependencies, optimized static asset caching
2. **Faster Response Times**: Added proper HTTP caching, response time monitoring
3. **Memory Efficiency**: Optimized garbage collection settings, reduced memory footprint
4. **Build Optimization**: Faster builds with production-only dependencies
5. **Security Headers**: Added security headers that also contribute to performance
6. **Container Optimization**: Smaller Docker image size for faster deployments

## Files Added for Performance Optimization

- `perf.config.js`: Performance configuration settings
- `Dockerfile`: Optimized container build
- `.dockerignore`: Optimized build context
- `build-optimization.sh`: Build optimization script
- Performance monitoring middleware in `app.js`

## Environment Configuration

Make sure to set up your environment variables in `./config/config.env`:
```
PORT=5000
NODE_ENV=production
```

## Monitoring and Analytics

The application includes built-in performance monitoring that logs request timing to the console. For more detailed analysis, use Clinic.js tools as mentioned above.