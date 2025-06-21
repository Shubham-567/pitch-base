# YC Directory

YC Directory is a platform for startup enthusiasts to pitch their ideas, connect with fellow entrepreneurs, submit startup concepts, vote on others' pitches, and gain visibility through virtual competitions.

## Features

- Pitch your startup idea
- Browse and vote on other startup pitches
- Participate in virtual competitions
- Connect with like-minded entrepreneurs

## Tech Stack

This project is built with the following technologies:

- **React 19**
- **Next.js 15**
- **TypeScript**
- **Tailwind CSS 4.1**
- **ShadCN UI**
- **Sanity (Headless CMS)**

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/yc-directory.git
   cd yc-directory
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```bash
   AUTH_SECRET=""
   AUTH_GITHUB_ID=""
   AUTH_GITHUB_SECRET=""
   NEXT_PUBLIC_SANITY_PROJECT_ID=""
   NEXT_PUBLIC_SANITY_DATASET=""
   SANITY_WRITE_TOKEN=""
   ```

   Replace the empty values with your actual credentials and configuration values.

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Acknowledgments

This project was built as part of a learning experience to explore Next.js 15 and full-stack development. It was guided by the YouTube course by JavaScript Mastery.

## License

This project is intended for learning and demonstration purposes. Refer to the original tutorial for licensing details.
