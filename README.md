# Desenvolvimento Mobile - 2026.1

Repositório para a disciplina utilizando React Native e Expo, escrito em TypeScript.

## Sobre

Aplicativo mobile multiplataforma (iOS, Android e Web) desenvolvido com **React Native** e **Expo SDK 54** no contexto da disciplina de Desenvolvimento Mobile 2026/1.

- **Linguagem:** TypeScript 5.9 (strict mode)
- **Framework:** React Native 0.81.5 + Expo ~54.0.33
- **Roteamento:** expo-router v6 (file-based routing)
- **Navegação:** @react-navigation/bottom-tabs
- **New Architecture:** Habilitada (Fabric + TurboModules)
- **Deep linking scheme:** `dm20261ts`

## Pré-requisitos

- Node.js >= 18
- npm (gerenciador de pacotes — não usar yarn ou pnpm)
- Expo Go no dispositivo físico ou simulador iOS/Android configurado

## Instalação

```bash
npm install
```

## Executando o projeto

```bash
# Inicia o Metro bundler (menu interativo)
npm start

# Abre diretamente em uma plataforma específica
npm run android
npm run ios
npm run web

# Verifica erros de linting
npm run lint

# Type-check sem emitir arquivos
npx tsc --noEmit
```

Após iniciar, escaneie o QR code com o **Expo Go** (Android/iOS) ou pressione `i` / `a` no terminal para abrir no simulador.

## Estrutura do projeto

```
dm-2026-1-ts/
├── app/              # Telas e rotas (expo-router file-based routing)
│   ├── (tabs)/       # Navegação por abas (tab layout)
│   └── _layout.tsx   # Layout raiz
├── components/       # Componentes reutilizáveis
│   └── ui/           # Componentes UI de baixo nível
├── hooks/            # Custom React hooks
├── constants/        # Constantes (tema, cores, etc.)
├── assets/images/    # Ícones, splash screen e imagens estáticas
├── app.json          # Configuração do Expo (nome, slug, ícones, experimentos)
├── tsconfig.json     # Configuração TypeScript (strict mode)
├── eslint.config.js  # ESLint flat config
├── AGENTS.md         # Guia para coding agents
└── package.json      # Dependências e scripts
```

> **Path alias:** `@/*` mapeia para a raiz do projeto. Use sempre para imports internos:
> ```typescript
> import { ThemedText } from '@/components/themed-text';
> import { Colors } from '@/constants/theme';
> ```

## Dependências principais

| Pacote                          | Versão    | Finalidade                              |
| ------------------------------- | --------- | --------------------------------------- |
| `expo`                          | ~54.0.33  | SDK principal do Expo                   |
| `expo-router`                   | ~6.0.23   | Roteamento file-based                   |
| `react`                         | 19.1.0    | React core                              |
| `react-native`                  | 0.81.5    | Runtime iOS e Android                   |
| `react-native-web`              | ~0.21.0   | Suporte à plataforma Web                |
| `@react-navigation/bottom-tabs` | ^7.4.0    | Navegação por abas                      |
| `react-native-reanimated`       | ~4.1.1    | Animações performáticas                 |
| `typescript`                    | ~5.9.2    | Suporte TypeScript com strict mode     |
| `eslint`                        | ^9.25.0   | Linting com eslint-config-expo          |

## Experimentos ativados

- **Typed routes:** Rotas e params são type-checked pelo TypeScript
- **React Compiler:** Otimizações automáticas no build (experimental)

## Recursos

- **New Architecture habilitada:** Fabric renderer + TurboModules para melhor performance
- **Strict TypeScript:** `strict: true` no tsconfig.json
- **ESLint v9:** Flat config com eslint-config-expo
- **VSCode auto-organize:** Imports organizados automaticamente ao salvar

---

Para informações detalhadas sobre convenções de código e guidelines para coding agents, consulte o arquivo [AGENTS.md](./AGENTS.md).
