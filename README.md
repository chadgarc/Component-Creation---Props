# React UI Components Lab – Detailed Overview

This project contains a set of reusable React + TypeScript components created for a UI fundamentals lab.
The goal was to practice typed props, optional rendering, callbacks, and component reuse.
Additionally, a custom **Modal** component was implemented as an extra exercise beyond the lab requirements.

[Check site here](https://chadgarc.github.io/Component-Creation-Props/)

---

## 📌 Project Purpose

The lab required building three UI components:

1. `AlertBox`
2. `UserProfileCard`
3. `ProductDisplay`

Each component needed:

- Strong TypeScript interfaces
- Optional props
- Conditional rendering
- Callback props
- Clean and reusable structure

To go further, a **Modal** component was added to practice composition and controlled UI patterns.

---

## 🧩 Components Overview

### AlertBox
A contextual message component used to display alerts such as success, error, warning, or info.

**Key features:**
- Uses a union type (`AlertType`) for strict alert categories.
- Optional `onClose` callback.
- Supports `children` for additional content.
- Demonstrates conditional UI and reusable patterns.

---

### UserProfileCard
Displays user information with optional fields and an edit callback.

**Key features:**
- Accepts a `User` object.
- Optional flags: `showEmail`, `showRole`.
- Optional `onEdit` callback that returns the user ID.
- Supports `children` for extended UI.

---

### ProductDisplay
Shows product details with optional description and stock status.

**Key features:**
- Accepts a `Product` object.
- Optional flags: `showDescription`, `showStockStatus`.
- Optional `onAddToCart` callback.
- Supports `children` for flexible UI composition.

---

### Modal (extra component)
Not required by the lab, implemented for practice.

**Key features:**
- Controlled component using `isOpen`.
- `onClose` callback for dismissing the modal.
- Wraps any content using `children`.
- Demonstrates component composition and reusable UI containers.

---

## 🔗 How Components Connect

Even though each component is independent, they follow consistent design principles:

### Shared patterns
- Strong TypeScript typing.
- Optional props for flexibility.
- Callback props for parent → child communication.
- `children` for composition and extensibility.

### Example interactions
- `UserProfileCard` → `onEdit` could open a `Modal`.
- `AlertBox` → can wrap additional content using `children`.
- `Modal` → can wrap any of the other components.

This creates a small but realistic UI ecosystem where components can be reused and combined.

---

## 🎯 What the Lab Required

The lab only required:

- Building the three main components.
- Using TypeScript interfaces.
- Handling optional props.
- Rendering conditional UI.
- Triggering callbacks.

No modal, no advanced UI composition, no reusable containers.

---

## 🚀 What Was Added Beyond the Lab

### ✔ Modal component
Created to practice:

- Controlled UI patterns (`isOpen`)
- Component composition (`children`)
- Reusable containers
- Separation of concerns (modal logic vs modal content)

### ✔ Improved typing
Union types, optional callbacks, reusable interfaces.

### ✔ Cleaner architecture
Each component is predictable, self-contained, and easy to reuse.

---

## 🛠️ Internal Component Behavior

### AlertBox
- Renders a message based on `type`.
- Shows a close button only if `onClose` is provided.
- Allows nested content via `children`.

### UserProfileCard
- Displays user data.
- Optional fields allow flexible UI.
- `onEdit` returns the user ID to the parent.

### ProductDisplay
- Shows product details.
- Optional flags control description and stock visibility.
- `onAddToCart` returns the product ID.

### Modal
- Controlled by `isOpen`.
- Renders children inside a centered overlay.
- Calls `onClose` when dismissed.

---

## 📚 Why This Structure Matters

This project demonstrates several important UI concepts:

- Component reuse
- Composition via `children`
- Typed callbacks
- Optional props for flexible UI
- Separation of display vs logic
- Clean TypeScript interfaces

These patterns scale well into larger React applications.

---

## 📄 Final Notes

This README explains:

- What the lab required
- What was built
- What was added voluntarily
- How each component works
- How they connect
- Why the architecture is clean and reusable

