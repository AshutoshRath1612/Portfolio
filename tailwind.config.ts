import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1.25rem",
                sm: "1.5rem",
                lg: "2rem",
            },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                surface: "var(--surface)",
                "surface-elevated": "var(--surface-elevated)",
                border: "var(--border)",
                muted: "var(--muted)",
                "muted-foreground": "var(--muted-foreground)",
                accent: "var(--accent)",
                "accent-foreground": "var(--accent-foreground)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
                mono: ["var(--font-mono)", "ui-monospace", "monospace"],
            },
            fontSize: {
                "display-xl": ["clamp(2.75rem, 7vw, 6.5rem)", {lineHeight: "0.95", letterSpacing: "-0.03em"}],
                "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", {lineHeight: "1.0", letterSpacing: "-0.025em"}],
                "display-md": ["clamp(1.75rem, 3.5vw, 3rem)", {lineHeight: "1.05", letterSpacing: "-0.02em"}],
                "heading": ["clamp(1.35rem, 2.2vw, 2rem)", {lineHeight: "1.15", letterSpacing: "-0.015em"}],
            },
            spacing: {
                section: "clamp(5rem, 12vh, 9rem)",
                gutter: "clamp(1.25rem, 5vw, 4rem)",
            },
            maxWidth: {
                content: "76rem",
                prose: "42rem",
            },
            borderRadius: {
                sm: "0.375rem",
                DEFAULT: "0.625rem",
                lg: "1rem",
                xl: "1.5rem",
            },
            boxShadow: {
                subtle: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
                elevated: "0 20px 50px -20px rgb(0 0 0 / 0.7)",
            },
            transitionTimingFunction: {
                "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                "fade-in": {
                    from: {opacity: "0"},
                    to: {opacity: "1"},
                },
                "pulse-signal": {
                    "0%, 100%": {opacity: "0.25"},
                    "50%": {opacity: "1"},
                },
                "caret-blink": {
                    "0%, 45%": {opacity: "1"},
                    "55%, 100%": {opacity: "0"},
                },
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out both",
                "pulse-signal": "pulse-signal 2.4s ease-in-out infinite",
                caret: "caret-blink 1.1s steps(1) infinite",
            }
        }
    },
    plugins: [],
}

export default config;