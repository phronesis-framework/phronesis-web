/**
 * Canonical Phronesis code snippets used across the landing page.
 * Each snippet is intentionally minimal — it showcases the framework's
 * shape, not its full surface area. Every snippet uses the real public
 * API as exported by the framework.
 */

export const HERO_SNIPPET = `from phronesis.agents import agent
from phronesis.providers import anthropic


@agent(
    model=anthropic(model="claude-sonnet-4-6"),
    system_prompt="You investigate questions thoroughly and cite sources.",
)
def researcher() -> str:
    """Investigate a question and synthesize a cited answer."""


result = await researcher.run("What is phronesis in Aristotelian ethics?")
print(result.output)
`;

export const AGENT_SNIPPET = `from phronesis import ToolEffect
from phronesis.agents import agent
from phronesis.providers import anthropic
from phronesis.tools import tool


@tool(effects=(ToolEffect.NETWORK,))
async def search_web(query: str, limit: int = 5) -> list[str]:
    """Search the web and return ranked snippets."""
    ...


@agent(
    model=anthropic(model="claude-sonnet-4-6"),
    tools=(search_web,),
    system_prompt="You are a careful research assistant.",
    max_iterations=8,
)
def assistant() -> str:
    """Answer questions grounded in live search results."""
`;

export const TOOL_SNIPPET = `from phronesis import ToolEffect
from phronesis.tools import tool
from pydantic import BaseModel


class SearchResult(BaseModel):
    title: str
    url: str
    snippet: str


@tool(effects=(ToolEffect.NETWORK,))
async def search_web(query: str, limit: int = 5) -> list[SearchResult]:
    """Search the web and return ranked results."""
    ...
`;

export const PIPELINE_SNIPPET = `from phronesis.pipelines import pipeline
from phronesis.runtime import ExecutionContext, Parallel, agent_node

research = pipeline(
    Parallel(nodes=(agent_node(fundamental), agent_node(sentiment))),
    agent_node(writer),
    agent_node(editor),
    name="research-and-synthesize",
)

ctx = ExecutionContext.new()
outcome = await research(ctx, "Compare Aristotle and Kant on practical reason.")
print(outcome.output)
`;

export const MCP_SNIPPET = `from phronesis.mcp import McpClient, McpServerSpec, StdioTransport

spec = McpServerSpec(
    name="filesystem",
    transport=StdioTransport(
        command="npx",
        args=("-y", "@modelcontextprotocol/server-filesystem", "/workspace"),
    ),
)

async with McpClient.connect(spec) as client:
    tools = await client.list_tools()

    developer = assistant.with_added_tools(tools)
    result = await developer.run("List the Python files in /workspace.")
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
