import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";

describe("Button", () => {
  it("应该正确渲染文本", () => {
    render(<Button>提交</Button>);

    expect(screen.getByRole("button", { name: "提交" })).toBeInTheDocument();
  });

  it("点击时应该触发 onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>保存</Button>);

    await user.click(screen.getByRole("button", { name: "保存" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("应该带上 variant 对应类名", () => {
    render(<Button variant="primary">主要按钮</Button>);

    expect(screen.getByRole("button", { name: "主要按钮" })).toHaveClass(
      "cg-button",
      "cg-button--primary",
    );
  });
});
