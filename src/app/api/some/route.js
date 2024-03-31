import { NextResponse } from "next/server";

// #region Functions (1)

export function GET() {
  return NextResponse.json("Hello world");
}

// #endregion Functions (1)
