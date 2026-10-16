export interface AIModelOption {
  id: string;
  name: string;
  provider: string;
  badge: string;
  description: string;
  speed: string;
  isDefault?: boolean;
}

export const AVAILABLE_MODELS: AIModelOption[] = [
  {
    id: "openai/gpt-oss-120b",
    name: "Detailed Article Writer",
    provider: "AI Studio",
    badge: "Recommended",
    description: "In-depth, natural human writing tailored for your city and clients",
    speed: "High Quality",
    isDefault: true,
  },
  {
    id: "openai/gpt-oss-20b",
    name: "Fast Article Writer",
    provider: "AI Studio",
    badge: "Quick",
    description: "Generates clean, engaging articles in just a few seconds",
    speed: "Super Fast",
  },
  {
    id: "groq/compound-mini",
    name: "Balanced Writer",
    provider: "AI Studio",
    badge: "Standard",
    description: "Well-structured articles with smooth reading flow",
    speed: "Balanced",
  },
];

export const DEFAULT_MODEL_ID = "openai/gpt-oss-120b";

export function getValidModel(modelId?: string): string {
  if (!modelId) return DEFAULT_MODEL_ID;
  const match = AVAILABLE_MODELS.find((m) => m.id === modelId);
  return match ? match.id : DEFAULT_MODEL_ID;
}
