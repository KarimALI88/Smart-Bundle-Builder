# Smart Bundle Builder

A professional, high-performance PC bundle building application built with React, TypeScript, and Ant Design. This project features a robust undo/redo system, real-time total calculation, and PDF export functionality.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/KarimALI88/Smart-Bundle-Builder.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
The project requires both the frontend and a mock API server to be running (if using the API mode).

1. **Start the Mock API (json-server):**
   ```bash
   npx json-server --watch db.json --port 3000

   json-server --watch db.json --port 3000
   ```
2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

## 🏗 Architecture: Undo/Redo State Logic

The state management for the bundle selection is powered by a custom `useHistory` hook located in `src/hooks/useHistory.ts`. This hook implements a "Time Travel" state pattern.

### How it works:
- **State Structure:** The history state is divided into three parts: `past`, `present`, and `future`.
- **Data Flow:**
  - **Present:** This is the current state being rendered in the UI (the active `selectedItems`).
  - **Update Action:** When a user selects a new item or modifies the bundle, the current `present` state is pushed into the `past` array, the new data becomes the `present`, and the `future` array is cleared.
  - **Undo:** Moves the last item from `past` to `present` and pushes the current `present` into `future`.
  - **Redo:** Moves the first item from `future` to `present` and pushes the current `present` into `past`.

This approach ensures that every user action is tracked, providing a seamless undo/redo experience with keyboard shortcuts (Ctrl+Z / Ctrl+Y).

## 📝 Important Notes

### Switching between Static and API Data
By default, the project may be set to use static mock data for initial testing. To switch to the full API integration (using React Query and Axios):

1. Open `src/pages/BuildBundle.tsx`.
2. **Uncomment** the following lines:
   - Line 10: `import { useItems } from "@/hooks/items/useItems"`
   - Line 82: `const {data: items, isPending, error} = useItems()`
   - Line 133: `if (isPending) return <div>Loading...</div>`
   - Line 135: `if (error) return <div>Error try after some minutes</div>`
3. **Comment out** the static data block:
   - Lines 13 to 80 (The `const [items] = useState([...])` block).

### Key Features
- **Keyboard Shortcuts:** Support for Ctrl+Z (Undo), Ctrl+Y (Redo), and Delete (Clear Build).
- **PDF Export:** Extract your current build configuration into a clean PDF document.
- **Incompatibility Checks:** Real-time validation to ensure selected components (CPU/Motherboard) are compatible.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.

## 🛠 Tech Stack
- **Frontend:** React 19, Vite, TypeScript
- **UI Library:** Ant Design (antd)
- **Styling:** Tailwind CSS
- **Data Fetching:** TanStack Query (React Query) & Axios
- **Utilities:** jsPDF, html-to-image (for PDF generation)
