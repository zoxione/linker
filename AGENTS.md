# Руководство для агентов по разработке

## Команды проекта

### Основные команды

- `pnpm dev` - Запуск dev-режима всех приложений
- `pnpm build` - Сборка всех приложений
- `pnpm start` - Запуск собранных приложений
- `pnpm lint` - Проверка кода (ESLint)
- `pnpm format` - Форматирование кода (Prettier)
- `pnpm typegen` - Генерация типов

### Специфические команды API

- `pnpm --filter @repo/api db:generate` - Генерация миграций базы данных
- `pnpm --filter @repo/api db:migrate` - Применение миграций
- `pnpm --filter @repo/api auth:generate` - Генерация auth

### Специфические команды Web

- `pnpm --filter @repo/web typegen` - Генерация типов API

### Запуск команд для конкретного приложения

- `pnpm --filter @repo/api dev` - Dev-режим API
- `pnpm --filter @repo/web dev` - Dev-режим Web

### Примечание о тестах

В проекте отсутствуют тесты. Требуется добавить тестовую инфраструктуру перед созданием тестов.

## Архитектура проекта

### Структура репозитория (Monorepo с Turbo)

- `apps/api` - API сервер на Hono (TypeScript, Drizzle ORM, Better Auth)
- `apps/web` - Next.js приложение (React 19, TypeScript, Better Auth)
- `packages/ui` - Переиспользуемые UI компоненты
- `packages/eslint-config` - Общая конфигурация ESLint
- `packages/typescript-config` - Общая конфигурация TypeScript

### Архитектура API

Слоистая архитектура:

- `apps/api/src/server/` - HTTP-слой, маршрутизация
- `apps/api/src/app/` - Бизнес-логика по доменам
  - `customer/` - Клиентская область
  - `system/` - Системная область
  - `shared/` - Общие сущности
- `apps/api/src/lib/` - Утилиты и вспомогательные функции
- `apps/api/src/persistence/` - Работа с базой данных и внешними сервисами
- `apps/api/src/config/` - Конфигурация приложения

### Архитектура Web

Функциональная архитектура:

- `apps/web/src/features/` - Бизнес-функции (feature-sliced)
- `apps/web/src/entities/` - Сущности предметной области
- `apps/web/src/widgets/` - Составные компоненты из сущностей и фич
- `apps/web/src/shared/` - Общий код (утилиты, типы, компоненты)
- `apps/web/src/core/` - Основной инфраструктурный код
- `apps/web/src/app/` - Next.js страницы и роутинг

## Стиль кода

### Импорты

Порядок импортов (автоматически сортируется Prettier):

1. Сторонние модули (THIRD_PARTY_MODULES)
2. Внутренние модули (@repo/\*)
3. Алиасы (@/)
4. Относительные пути (./)

Пример:

```typescript
import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { Button } from "@repo/ui/button";

import { db } from "@/persistence/db";

import { toView } from "./mappers";
```

### Форматирование

- Длина строки: 120 символов
- Кавычки: двойные (")
- Точка с запятой: да
- Отступы: 2 пробела (табы запрещены)
- Trailing comma: да (all)
- Arrow parens: всегда
- Имена функций camelCase, классов PascalCase

### Именование файлов

- `kebab-case.ts` для TypeScript файлов
- `kebab-case.tsx` для React компонентов
- `component-name.component.tsx` для сложных компонентов
- `entity-name.model.ts` для моделей/типов сущности
- `feature-name.index.ts` для экспорта фичи

### Структура компонентов

Для сложных компонентов используйте структуру:

```
feature-name/
├── index.ts
├── ui/
│   └── feature-name.component.tsx
├── model/
│   ├── feature-name.types.ts
│   ├── feature-name.schemas.ts
│   └── feature-name.mappers.ts
```

### Классы и сервисы

- Используйте классы только для сервисов
- Приватные методы обозначайте префиксом `#`
- Используйте camelCase для методов и свойств

Пример:

```typescript
class CustomerLinkService {
  #generateToken(): string {
    return nanoid(10);
  }

  async create(dto: CustomerLinkCreate): Promise<CustomerLinkView> {
    const token = this.#generateToken();
    // ...
  }
}
```

### Обработка ошибок

- Используйте HTTPException для API ошибок
- Сообщения об ошибках на русском языке
- Проверяйте null/undefined перед использованием

Пример:

```typescript
if (!link) {
  throw new HTTPException(404, { message: "Ссылка не найдена" });
}
```

### React компоненты

- Используйте функциональные компоненты и хуки
- Именуйте компоненты PascalCase
- Используйте "use client" для клиентских компонентов
- Деструктурируйте props в сигнатуре функции

Пример:

```typescript
"use client";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
```

### Работа с базой данных

- Используйте Drizzle ORM
- Используйте операторы (`eq`, `and`, `asc`, `desc` и др.)
- Валидируйте входные данные с помощью Zod

### Типы и валидация

- Используйте Zod для валидации DTO
- Типы: PascalCase, Zod схемы: UPPER_SNAKE_CASE
- Экспортируйте и схему, и тип

Пример:

```typescript
const CUSTOMER_LINK_CREATE = z.object({
  name: z.string().min(1),
});

type CustomerLinkCreate = z.infer<typeof CUSTOMER_LINK_CREATE>;

export { CUSTOMER_LINK_CREATE, type CustomerLinkCreate };
```

## Константы и конфигурация

- Константы: UPPER_SNAKE_CASE
- Конфигурация в отдельных файлах в `config/` папке

## Комментарии

- НЕ добавляйте комментарии в код
- Код должен быть самодокументируемым

## Перед коммитом

1. Запустите `pnpm lint` для проверки кода
2. Запустите `pnpm format` для форматирования
3. Убедитесь, что все изменения прошли проверку

## Переменные окружения

Переменные окружения задекларированы в turbo.json. Используйте `dotenv --` для команд, требующих переменных окружения.

## Язык проекта

Все сообщения, комментарии и документация должны быть на русском языке.

## Конвенции кода

- Пишите чистый, понятный код
- Избегайте дублирования (DRY принцип)
- Используйте осмысленные имена переменных и функций
- Следуйте существующим паттернам в кодовой базе
- Функциональный подход: избегайте мутаций, используйте чистые функции
- Используйте мемоизацию (useMemo, useCallback) там, где это необходимо
