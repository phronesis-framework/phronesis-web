/**
 * Canonical Phronesis code snippets used across the landing page.
 * Each snippet is intentionally minimal — it showcases the framework's
 * shape, not its full surface area.
 */

export const HERO_SNIPPET = `from phronesis import Agent, anthropic

researcher = Agent(
    name="researcher",
    model=anthropic("claude-opus-4-7"),
    system_prompt="You investigate questions thoroughly and cite sources.",
)

answer = await researcher.run("What is phronesis in Aristotelian ethics?")
`;

export const AGENT_SNIPPET = `from phronesis import Agent, anthropic
from phronesis.memory import SemanticMemory

agent = Agent(
    name="assistant",
    model=anthropic("claude-opus-4-7"),
    tools=[search_web, read_file],
    memory=SemanticMemory(scope="session"),
    system_prompt="You are a careful research assistant.",
)
`;

export const TOOL_SNIPPET = `from phronesis import tool
from pydantic import BaseModel

class SearchResult(BaseModel):
    title: str
    url: str
    snippet: str

@tool(effects=["network"])
async def search_web(query: str, limit: int = 5) -> list[SearchResult]:
    """Search the web and return ranked results."""
    ...
`;

export const PIPELINE_SNIPPET = `from phronesis import Pipeline, Stage
from phronesis.modes import Sequence, ReActLoop

research = Pipeline(
    name="research-and-synthesize",
    stages=[
        Stage("gather", mode=ReActLoop(agent=researcher, max_iterations=8)),
        Stage("synthesize", mode=Sequence(agents=[writer, editor])),
    ],
)

report = await research.run(input="Compare Aristotle and Kant on practical reason.")
`;

export const MCP_SNIPPET = `from phronesis import Agent, anthropic
from phronesis.mcp import MCPServer

filesystem = MCPServer(
    name="filesystem",
    command="npx",
    args=["-y", "@modelcontextprotocol/server-filesystem", "/workspace"],
)

agent = Agent(
    name="developer",
    model=anthropic("claude-opus-4-7"),
    mcp_servers=[filesystem],
)
`;

export const INSTALL_SNIPPET = `pip install phronesis-framework`;

export type CodeTourTabKey = "agent" | "tool" | "pipeline" | "mcp";

export interface CodeTourTab {
  value: CodeTourTabKey;
  code: string;
  filename: string;
}

export const CODE_TOUR_TABS: readonly CodeTourTab[] = [
  { value: "agent", code: AGENT_SNIPPET, filename: "agent.py" },
  { value: "tool", code: TOOL_SNIPPET, filename: "tools.py" },
  { value: "pipeline", code: PIPELINE_SNIPPET, filename: "pipeline.py" },
  { value: "mcp", code: MCP_SNIPPET, filename: "mcp.py" },
] as const;
