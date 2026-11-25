# WAC – Choir Management Application

WAC is a web application designed to support the activities and management of two choirs. It provides a public information space for visitors interested in the choirs, as well as dedicated tools for choir members and administrators.

The application aims to bring essential choir-related information and resources together in one place, including sheet music, event calendars and choir member management.

You can try it under this [link](https://samplawski.github.io/WAC/).

## Table of Contents

1. Short Description
2. Features
3. Technologies Used
4. Architecture and Technical Highlights
5. Authentication and Permissions
6. Project Structure
7. Setup
8. How to Use
9. Status and Future Development
10. Contact

## 1. Short Description

WAC (Wyrzyska Akademia Chóralna - Wyrzysk Choral Academy) is a web application designed to support two choirs by providing a shared digital platform for public information and choir-related activities.

The application is intended for two groups of users:

- **Public visitors** – people interested in learning more about the choirs and their activities.
- **Choir members and administrators** – users who will have access to dedicated resources and management tools.

The main goal is to bring essential choir-related information and resources together in one place.

## 2. Features

The application is being developed with the following features in mind:

**Public Features**

- Information about both choirs.
- Shared news and announcements.

**Choir Member Features**

- Separate sheet music catalogues for each choir.
- Separate event calendars for each choir.
- Access to resources based on choir membership and assigned permissions.

**Administration Features**

- Sheet music catalogue management.
- Calendar and event management.
- Choir member management.
- User roles and permissions.

## 3. Technologies Used

The project uses the following technologies and tools:

- **React** – building the user interface using reusable components and Hooks.
- **TypeScript** – static typing and improved code reliability.
- **Vite** – development server and build tool.
- **styled-components** – component-based styling and theming.
- **ESLint** – JavaScript and TypeScript code quality checks.
- **Stylelint** – CSS-in-JS styling consistency and quality checks.
- **npm** – package management.

## 4. Architecture and Technical Highlights

The application follows a component-based architecture, with an emphasis on reusable components, maintainability and consistent styling.

Key architectural decisions include:

- **Component-Based Architecture:** the user interface is built from reusable and independent React components.
- **Component Organization:** each component is organized in its own directory. The main component is defined in `index.tsx`, with optional `styled.ts` and custom hook files when needed.
- **Centralized Theme:** shared colors, spacing, border radius and responsive breakpoints are defined in a central theme configuration.
- **Responsive Design:** styled-components are used to create layouts that adapt to different screen sizes.
- **Code Quality:** ESLint and Stylelint are configured to maintain consistent code quality and styling conventions.
- **Type Safety:** TypeScript helps improve maintainability and reduce potential errors.

## 5. Authentication and Permissions

Authentication and authorization are planned features and have not yet been implemented. The application is designed to support role-based access control, allowing users to have multiple roles and permissions.

Access to choir-specific resources will be determined by the user's choir membership and assigned permissions.

The planned authentication and authorization system will use Supabase:

- **Authentication** – secure user sign-in and session management.
- **Role-Based Access Control (RBAC)** – access permissions based on assigned user roles.
- **Choir Membership** – users can be associated with one or both choirs.
- **Row Level Security (RLS)** – database-level access control to protect sensitive data and resources.
- **Dynamic Navigation** – the user interface displays navigation options according to the authenticated user's permissions.

The system is designed to separate user interface visibility from actual data access authorization, ensuring that permissions are enforced at the database level.

## 6. Project Structure

The project follows a component-based folder structure, keeping application components and their related files organized and easy to maintain.

```text
src/
├── assets/                 # Static assets (images, icons)
├── common/                 # Shared application components
│   ├── Clock/
│   │   ├── index.tsx
│   │   ├── styled.ts
│   │   └── useCurrentDate.tsx
│   ├── Footer/
│   │   ├── index.tsx
│   │   └── styled.ts
│   └── Header/
│       ├── index.tsx
│       └── styled.ts
├── App.tsx                 # Main application component
├── index.css               # Global styles
├── main.tsx                # Application entry point
├── styled.d.ts             # styled-components theme type definitions
└── theme.ts                # Centralized application theme
```

## 7. Setup

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/samplawski/WAC.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WAC
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the URL displayed in the terminal (usually `http://localhost:5173`).

### Available Scripts

- `npm run dev` – starts the Vite development server.
- `npm run build` – creates a production build.
- `npm run predeploy` – automatically builds the application before deployment.
- `npm run deploy` – builds and publishes the application to the gh-pages branch.
- `npm run preview` – locally previews the production build.
- `npm run lint` – runs ESLint to check JavaScript and TypeScript code.
- `npm run lint:css` – runs Stylelint to check styling conventions.
- `npm run lint:css:fix` – automatically fixes supported Stylelint issues.
- `npm run repomix` – generates a project summary using Repomix.

## 8. How to Use

Usage instructions will be added as the application's features are implemented.

## 9. Status and Future Development

The project is currently under active development.

The initial project setup and development environment are complete. The application structure, shared components and responsive footer have been implemented.

Planned development includes:

- Building public pages for both choirs.
- Implementing sheet music catalogues and event calendars.
- Adding choir member and administration features.
- Integrating Supabase for authentication, data storage and role-based access control.
- Implementing responsive layouts across the entire application.

The project will evolve incrementally, with a focus on maintainability, usability and secure access to choir resources.

## 10. Contact

The project was created by Tomasz Sampławski.

For questions, suggestions or other inquiries, feel free to contact me:

- **Email:** tsamplawski@gmail.com
- **GitHub:** https://github.com/samplawski/WAC
