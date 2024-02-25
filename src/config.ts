const apiKey = import.meta.env.VITE_API_KEY;
const env = import.meta.env.MODE;
const limitOfDays = 15;
const staleTime = 1000 * 60 * 60 * 6; // 6 hours

export default { apiKey, env, limitOfDays, staleTime };
