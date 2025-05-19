
// Configuration with production values
export const mailerLiteConfig = {
  apiKey: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjMyZDliODUwZGVhZjQzZjNmYmJlMTEyYzI2ZDBkNTMwMzVjNGM4ZDFmNGFhNGRjMGQ2ZjE1M2MyZjEzNGY3ZTVmZjViM2I1Zjk2NzU2MzQiLCJpYXQiOjE3NDc2NTk2NzAuOTQ1NjcxLCJuYmYiOjE3NDc2NTk2NzAuOTQ1Njc0LCJleHAiOjQ5MDMzMzMyNzAuOTM5OTk2LCJzdWIiOiIxNTE4MTQ1Iiwic2NvcGVzIjpbXX0.XmqfzM_NNlVyMP6mfIZckL_2OeaYWcGvnkC1qyJOrckdMo9BOUAWYvl3rVRC_jG7Juk6MmrtBRrHTt2NYIqLayXd7ynu60qwJG_l3-9mCZrnm0nF6_JVMG1RBzKf_JiW2DYwF9MB6SrH5Z0vyt_qecj0krD8jXol1JZFT0bl9xypBBWTyqFVZQwXm5p5CKR67MrFxg-uM_PoyHE2GZmTDpcgQXYkZgJlj8y4QfChHazKaizMI-eMqj10hA6MmoVzKv5YBlFMFOJhaoVcCNrIobQWDv7nQxhGwadO3xeAhAVGBCN8jy_ubVoAAUQRVEP2U7xrq2HaVehj4HX_36QV8iNiJIpZj5byJ1evpxjFkjo79M_Qddgx0pyI_E_NUgMSQU6tjlfJ3kxTy4ypRh5PEzN4dVwr12jVwomL1FDPmboeK7gXdVw976xV4lvYJfGUDkE2tMEiKPBFMSIw2oB5g4V8QdNjnApcrhkOsleTmx0p8N8cunUnYRA_TTM3xnbK90H6aC436fhC8MFSJ05hu9ZCx3x_wvHpfKv_-JAKgpISIhme7QBITIt48-SXuSYrZadXnhLPTERvXvBEXfBk3LR6Q2gxI3ejJnHDmmD7krZ_r9N_0GFDQZxwN8mcXIZJ2LuDF8NGcFuXG5UHCm97Of4X430LKQCrDJ6-P2NER54",
  groupId: "154227072433129416",
  baseUrl: 'https://connect.mailerlite.com/api',
  rateLimit: {
    maxRequests: 100, // maximum requests
    perMinute: 1, // per minute
  }
};

// Helper to check if we're using demo values - now always returns false since we're in production
export const isUsingDemoConfig = () => {
  return false; // Always in production mode with real keys
};

