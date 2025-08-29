# Design Decisions (1 Page)

## Color Palette
- Primary Blue: #3B82F6 (action/accents) — modern, accessible contrast
- Navy Sidebar: #1E293B — strong separation for navigation
- Success: #22C55E, Danger: #EF4444 — clear, conventional semantics
- Text: Slate grays (#334155 / #64748B) for good readability on light backgrounds

## Typography
- System UI stack via Tailwind defaults — crisp, legible, and widely available
- Headings: 18–24px bold, Body: 14–16px regular, Labels: 12px muted
- Tight vertical rhythm (4/8px spacing) for clean hierarchy

## Layout
- Left fixed sidebar, main content with 3 rows:
  1) Stats cards (quick glance KPIs)
  2) Car availability (filters) + Live car status (table)
  3) Visual insights: Hire vs Cancel (pie) and Earnings over time (line)
- Grid responsive: 3 columns on desktop → stacked on tablet

## Interactivity
- Hover: buttons and sidebar links change background/contrast
- Focus: visible ring via Tailwind focus styles for keyboard accessibility
- Table rows highlight on hover for scan-ability

## Accessibility
- Color contrast meets WCAG AA for text on primary/secondary
- Focus outlines enabled; interactive elements have clear targets
- Semantic labels in UI (table headers, form labels)

## Extras / Value Add
- Status badges (On Trip, Idle, Maintenance) with color semantics
- Tips card under filters to guide first-time users
- Clean, reusable components to scale features quickly
