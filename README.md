# Product Feedback Project

## Overview

Hello everyone! 👋 This project is a solution to a challenge from [Frontend Mentor](https://www.frontendmentor.io/). It's a product feedback application where users can:

- View an optimized layout based on their device’s screen size.
- See hover states for all interactive elements.
- Create, read, update, and delete product feedback requests.
- Receive form validation when creating or editing feedback requests.
- Sort suggestions by most/least upvotes and most/least comments.
- Filter suggestions by category.
- Add comments and replies to feedback requests.
- Upvote feedback requests.

### App Behavior

- **Suggestions Page**: Only product feedback requests with a status of `suggestion` are shown.
- **Roadmap**: Feedback requests with statuses of `planned`, `in-progress`, or `live` are displayed in the appropriate columns on the Roadmap, sorted by upvotes.
- **Creating Feedback**: When creating new feedback, an ID is assigned that increments from the highest current ID. New feedback defaults to `suggestion` and appears on the Suggestions page.
- **Editing Feedback**: If feedback status is updated to `planned`, `in-progress`, or `live`, it moves to the appropriate Roadmap column.
- **Comments/Replies**: New comments and replies use the `currentUser` object from `data.json` to populate user data. Each comment/reply is limited to 250 characters.

Figma design files were provided, including layouts for mobile, tablet, and desktop, along with design guidelines for colors, fonts, and hover states. I utilized the given `data.json` to populate the app with data and focused entirely on the front-end.

## Tech Stack

- **TypeScript**
- **React** with **Vite**
- **Tailwind css** for styling
- **React Router DOM** for routing
- **React-hot-toast** for toast display

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher) or yarn

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/FlorianGmz/Frontend-Mentor-Challenges_Product-Feedback.git
   cd Frontend-Mentor-Challenges_Product-Feedback
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the development server**:
   ```sh
   npm run dev
   ```
   This will start the Vite development server at http://localhost:5173.

## Conclusion

This was my first time working with Figma design files, and I really enjoyed following the style guidelines and UI/UX principles. I aimed for a pixel-perfect implementation.

Feel free to reach out if you have any questions or feedback!

## License

This project is licensed under the MIT License.
