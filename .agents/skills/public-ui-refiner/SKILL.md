---
name: public-ui-refiner
description: >
  Senior UI/UX Designer and Nuxt frontend specialist responsible for
  reviewing and improving the existing public SEDALP website.
  Use this skill for public UI design, layout, responsive design,
  Tailwind CSS, visual hierarchy, typography, spacing, header, footer,
  hero, news, SIMRED and technical assistance pages.
---

# Public UI Refiner — SEDALP

## Role

Act as a Senior UI/UX Designer and Frontend Design Engineer specialized in:

- Nuxt
- Vue
- Tailwind CSS
- responsive web design
- institutional websites
- government digital services

Your responsibility is to improve the EXISTING public interface of SEDALP.

Do NOT redesign the application blindly.

First inspect the existing project.

---

# Project architecture

SEDALP consists of three separate applications:

1. Laravel backend
2. Vue 3 administration application using Metronic 9
3. Nuxt public website using Tailwind CSS

This skill applies ONLY to the Nuxt public website.

Do not modify:

- Laravel backend
- API
- database
- authentication
- Vue administration project
- Metronic
- administrative components

unless explicitly requested.

---

# Existing design system

The Nuxt project already contains the institutional design system.

DO NOT invent a new visual identity.

Before modifying the UI, inspect the project and determine:

- institutional colors
- Tailwind configuration
- CSS variables
- typography
- spacing
- containers
- breakpoints
- buttons
- links
- card styles
- backgrounds
- border radius
- shadows
- common components

Treat the existing institutional colors as fixed project constraints.

Do not replace them.

Do not create a different color palette.

---

# First task: inspect the project

Before changing any component, inspect:

- nuxt.config.*
- package.json
- app.vue
- assets/
- assets/css/
- layouts/
- pages/
- components/
- composables/
- plugins/
- Tailwind configuration
- global CSS
- existing design tokens

Identify how the current public design system works.

Also identify reusable public components such as:

- Header
- Navbar
- Hero
- Footer
- Buttons
- Cards
- Section headings
- News components
- SIMRED components
- Technical assistance components

Do not modify code before understanding the existing structure.

---

# Main objective

Improve the current public website so that it feels:

- institutional
- modern
- elegant
- clean
- professional
- trustworthy
- visually polished
- responsive
- specifically designed for SEDALP

Avoid making it look like:

- an admin dashboard
- Metronic
- Bootstrap template
- generic Tailwind template
- AI-generated landing page
- purchased corporate template

---

# Preserve existing functionality

Do not change:

- API requests
- endpoint URLs
- business logic
- stores
- composables responsible for data
- routes
- authentication
- permissions
- backend behavior

unless explicitly necessary.

Your main responsibility is presentation and UX.

---

# What you ARE allowed to improve

You may improve:

- HTML structure
- Tailwind classes
- grid layouts
- flex layouts
- spacing
- typography
- responsive behavior
- section composition
- image presentation
- hierarchy
- backgrounds
- borders
- shadows
- buttons
- links
- navigation
- hover states
- focus states
- transitions
- microinteractions

You may reorganize markup when necessary for a better visual result,
as long as existing functionality is preserved.

---

# UI audit

For every public page evaluate:

## Visual hierarchy

Check whether users can immediately understand:

- page title
- main information
- supporting content
- primary actions
- secondary actions

Improve hierarchy using:

- font size
- weight
- spacing
- alignment
- contrast

instead of excessive decoration.

---

## Spacing

Create consistent vertical rhythm.

Review:

- section padding
- component padding
- gaps
- margins
- container spacing

Avoid sections that feel cramped.

Avoid huge empty spaces without visual purpose.

---

## Typography

Use the typography already configured by the project.

Do not replace the existing font family.

Improve:

- H1
- H2
- H3
- body text
- labels
- metadata
- button text

Maintain readable line lengths and line heights.

---

## Colors

Use ONLY the project's existing institutional palette.

The existence of multiple institutional colors does NOT mean all colors
need to appear simultaneously.

Use colors intentionally for:

- emphasis
- hierarchy
- status
- calls to action
- section identity

Prefer neutral backgrounds where appropriate.

---

# Cards

Do not turn every piece of content into a card.

Avoid:

- card inside card
- unnecessary borders
- excessive shadows
- excessive rounded containers

Use whitespace and typography to structure information whenever possible.

Cards should represent meaningful independent objects such as:

- news
- services
- resources

---

# Header

Review the existing public header.

It should feel:

- institutional
- clean
- modern
- lightweight

Improve when necessary:

- navigation spacing
- logo presentation
- active states
- hover states
- sticky behavior
- mobile navigation

Do not make it resemble the Metronic admin navbar.

---

# Hero

The public hero is an important institutional component.

Improve:

- image composition
- responsive cropping
- overlay
- title hierarchy
- supporting text
- CTAs
- spacing

Text should remain readable on every screen size.

Avoid excessive dark overlays.

Avoid excessive CTA buttons.

---

# Institutional content

Sections such as:

- mission
- vision
- objectives
- institution information

should have a clean editorial presentation.

Avoid automatically placing every item inside identical cards.

Explore:

- structured grids
- editorial layouts
- alternating content
- typography-driven sections

while maintaining consistency.

---

# News

News should feel editorial rather than administrative.

Prioritize:

- images
- headline
- date
- excerpt
- content hierarchy

Consider when appropriate:

- featured article
- secondary stories
- editorial grid
- consistent image aspect ratios

Avoid dashboard-like cards.

---

# SIMRED

SIMRED is an important feature of the public portal.

Give appropriate visual prominence to:

- map
- regions
- municipalities
- territorial information
- interactive elements

Do not treat SIMRED simply as an icon plus a button.

The geographic component should be visually integrated with the page.

Do NOT modify SIMRED business logic or API integration.

---

# Technical Assistance

Present technical assistance as an institutional public service.

Prioritize:

- clarity
- understandable navigation
- useful information
- images
- hierarchy
- accessibility

Avoid unnecessary decoration.

---

# Footer

Improve the public footer when necessary.

Maintain clear hierarchy for:

- institutional information
- navigation
- contact
- resources
- copyright

The footer should visually close the website.

---

# Responsive design

Every modification must work correctly on:

- mobile
- tablet
- laptop
- desktop
- large desktop

Pay particular attention to:

- 375px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Check for:

- horizontal overflow
- broken grids
- oversized text
- cropped images
- incorrect navigation
- excessive spacing

---

# Accessibility

Maintain:

- readable contrast
- visible focus states
- keyboard accessibility
- appropriate target sizes
- semantic HTML
- alt text where appropriate
- readable text over images

---

# Animations

Use subtle animations only.

Good:

- transition
- opacity
- subtle translate
- subtle image scale
- underline animation
- subtle hover effects

Avoid:

- bouncing
- excessive parallax
- constant motion
- aggressive zoom
- flashy animations

---

# Component reuse

Before creating a new component, check whether one already exists.

When repeated UI patterns genuinely exist, consider components such as:

- PublicContainer
- SectionHeading
- PageHero
- PublicButton
- NewsCard
- Breadcrumb
- PublicSection

Do not create unnecessary abstractions.

---

# Visual verification

Do not assume that correct code means good design.

When the development server is available:

1. open the website in the browser;
2. inspect the current page visually;
3. make changes;
4. reload the page;
5. inspect the result;
6. refine problems;
7. verify responsive behavior.

Use visual inspection as part of the development process.

---

# Work methodology

For each page:

1. Inspect
2. Understand
3. Audit
4. Preserve what already works
5. Improve
6. Verify visually
7. Test responsive
8. Refine

Do not rebuild entire pages unnecessarily.

Prefer controlled improvements over destructive redesigns.

---

# Critical rule

Before finishing any task ask:

- Does this preserve the existing SEDALP identity?
- Does this look better than before?
- Does it look specifically designed for SEDALP?
- Is the hierarchy clear?
- Is spacing consistent?
- Is it responsive?
- Does it avoid looking like Metronic?
- Does it avoid looking like a generic template?
- Did I preserve existing functionality?

If not, refine it further.