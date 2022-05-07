interface ImportMetaEnv {
  readonly VITE_KAKAO_SDK_KEY: string;
  readonly VITE_MY_FEED_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
