const BASE_ERROR_CODES = {
  USER_NOT_FOUND: "Пользователь не найден",
  FAILED_TO_CREATE_USER: "Не удалось создать пользователя",
  FAILED_TO_CREATE_SESSION: "Не удалось создать сессию",
  FAILED_TO_UPDATE_USER: "Не удалось обновить пользователя",
  FAILED_TO_GET_SESSION: "Не удалось получить сессию",
  INVALID_PASSWORD: "Неверный пароль",
  INVALID_EMAIL: "Неверный адрес электронной почты",
  INVALID_EMAIL_OR_PASSWORD: "Неверный адрес электронной почты или пароль",
  SOCIAL_ACCOUNT_ALREADY_LINKED: "Социальный аккаунт уже привязан",
  PROVIDER_NOT_FOUND: "Провайдер не найден",
  INVALID_TOKEN: "Неверный токен",
  ID_TOKEN_NOT_SUPPORTED: "id_token не поддерживается",
  FAILED_TO_GET_USER_INFO: "Не удалось получить информацию о пользователе",
  USER_EMAIL_NOT_FOUND: "Email пользователя не найден",
  EMAIL_NOT_VERIFIED: "Email не подтверждён",
  PASSWORD_TOO_SHORT: "Пароль слишком короткий",
  PASSWORD_TOO_LONG: "Пароль слишком длинный",
  USER_ALREADY_EXISTS: "Пользователь уже существует. Используйте другой email.",
  EMAIL_CAN_NOT_BE_UPDATED: "Email нельзя изменить",
  CREDENTIAL_ACCOUNT_NOT_FOUND: "Учетная запись не найдена",
  SESSION_EXPIRED: "Сессия истекла. Повторно войдите для выполнения этого действия.",
  FAILED_TO_UNLINK_LAST_ACCOUNT: "Нельзя отвязать последний аккаунт",
  ACCOUNT_NOT_FOUND: "Аккаунт не найден",
  USER_ALREADY_HAS_PASSWORD: "У пользователя уже есть пароль. Введите его, чтобы удалить аккаунт.",
};

const EMAIL_OTP_ERROR_CODES = {
  OTP_EXPIRED: "Код истёк",
  INVALID_OTP: "Неверный код",
  INVALID_EMAIL: "Неверный адрес электронной почты",
  USER_NOT_FOUND: "Пользователь не найден",
  TOO_MANY_ATTEMPTS: "Слишком много попыток",
};

const getAuthError = (code?: string): string | null => {
  if (!code) {
    return null;
  }
  if (code in BASE_ERROR_CODES) {
    return BASE_ERROR_CODES[code as keyof typeof BASE_ERROR_CODES];
  }
  if (code in EMAIL_OTP_ERROR_CODES) {
    return EMAIL_OTP_ERROR_CODES[code as keyof typeof EMAIL_OTP_ERROR_CODES];
  }
  return null;
};

export { getAuthError };
