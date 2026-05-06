import { Card } from "@/components/ui/card"

interface ExamplePromptsProps {
  onPromptSelect: (prompt: string) => void
}

const EXAMPLE_PROMPTS = [
  {
    title: "Summarize the key findings of this report.",
  },
  {
    title: "Extract the main action items from the document.",
  },
  {
    title: "What are the core arguments presented here?",
  },
  {
    title: "Can you provide a brief overview of the executive summary?",
  },
]

export function ExamplePrompts({ onPromptSelect }: ExamplePromptsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {EXAMPLE_PROMPTS.map((prompt, i) => (
        <Card 
          key={i} 
          className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => onPromptSelect(prompt.title)}
        >
          <p className="text-sm text-center font-medium">{prompt.title}</p>
        </Card>
      ))}
    </div>
  )
}

