const PORT = process.env.REACT_APP_PORT || 5000
export const API_BASE_URL = process.env.REACT_APP_NODE_ENV === 'production' ? 'https://notezipper-mern-api.vercel.app' : `http://localhost:${PORT}`
