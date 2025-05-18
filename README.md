# Avrio Energy Maintenance Dashboard

This project is a responsive, component-based dashboard for Avrio Energy's analytical platform, designed to help business owners manage and optimize their property portfolios.

## Features

- **Component-Based Architecture**: Modular design with reusable components
- **Interactive Data Visualization**: Multiple chart types including line charts, stacked bar charts, and single bar charts
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Map**: Geographic visualization of portfolio properties
- **Dynamic Data Updates**: All dashboard elements update when date range changes
- **Search and Sort Functionality**: Table with searching and sorting capabilities
- **Clean, Maintainable Code**: Well-structured and documented codebase

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vuex**: State management
- **Vue Router**: Navigation management
- **Chart.js**: Data visualization
- **Leaflet**: Interactive maps

## Project Setup

```bash
# Install dependencies
yarn install

# Serve with hot-reload for development
yarn serve

# Compile and minify for production
yarn build
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable Vue components
│   ├── charts/      # Chart components
│   ├── layout/      # Layout components
│   ├── maps/        # Map components
│   └── tables/      # Table components
├── router/          # Vue Router configuration
├── store/           # Vuex store modules
└── views/           # Page components
```

## Component Documentation

### Layout Components
- **SidebarNav**: Main navigation sidebar
- **HeaderComponent**: Page header with filters and date selection
- **MaintenanceOverview**: Summary statistics and metrics

### Data Visualization
- **TicketingChart**: Multi-line chart showing creation and completion rates
- **StackedBarChart**: Monthly performance by category
- **SingleBarChart**: Cost distribution visualization

### Interactive Elements
- **PortfolioDetail**: Searchable and sortable table of portfolio items
- **MapComponent**: Geographic visualization of property locations

## Responsive Design

The dashboard is fully responsive and provides an optimal viewing experience across a wide range of devices:
- **Desktop**: Full-featured layout with side-by-side components
- **Tablet**: Adapted layout with resized components
- **Mobile**: Stacked layout with touch-friendly controls

## Development Notes

This project was developed as part of an internship assignment for Avrio Energy, focusing on creating a pixel-perfect implementation of the provided design while ensuring code quality, component reusability, and responsive design.
