# The Everett

A professional luxury real estate platform built for "The Everett" – ultra-premium residences in Lullanagar, Pune.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email Delivery:** [Resend](https://resend.com/)
- **Language:** TypeScript

## Features

- **Luxury UI/UX:** High-end, premium minimal design tailored for luxury real estate.
- **Smooth Animations:** Integrated page transitions and reveal animations using Framer Motion.
- **Professional Lead Capture:** Connects both popup and inline forms directly to email via the Resend API.
- **Local Backup Strategy:** Form submissions are seamlessly backed up to a lightweight local `.csv` file.
- **Vercel Ready:** Fully optimized for instantaneous deployments on the Vercel edge network.

## Local Development

First, ensure dependencies are installed:

```bash
npm install
```

Next, configure the environment variables by creating a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key_here
CLIENT_EMAIL=your_email@example.com
```

Finally, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push this repository to GitHub.
2. Import the project on your Vercel Dashboard.
3. Add the Environment Variables (`RESEND_API_KEY`, `CLIENT_EMAIL`) in the Vercel project settings.
4. Deploy. Vercel will automatically detect the Next.js framework and configure the build settings.
