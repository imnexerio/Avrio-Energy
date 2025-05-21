# 🔋 Avrio Energy Maintenance Dashboard

A responsive, component-based dashboard for Avrio Energy's analytical platform, designed to help business owners manage and optimize their property portfolios.

<div align="center">
  <img src="https://raw.githubusercontent.com/imnexerio/Avrio-Energy/main/public-portfolio/preview.gif" alt="Dashboard Preview" width="90%" />
</div>

## ✨ Features

- **🧩 Component-Based Architecture**: Modular design with reusable components
- **📊 Interactive Data Visualization**: Multiple chart types including line charts, stacked bar charts, and single bar charts
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🗺️ Interactive Map**: Geographic visualization of portfolio properties
- **🔄 Dynamic Data Updates**: All dashboard elements update when date range changes
- **🔍 Search and Sort Functionality**: Table with searching and sorting capabilities
- **✅ Clean, Maintainable Code**: Well-structured and documented codebase

## 🛠️ Technologies Used

- **⚡ Vue 3**: Progressive JavaScript framework
- **🗃️ Vuex**: State management
- **🧭 Vue Router**: Navigation management
- **📈 Chart.js**: Data visualization
- **🌎 Leaflet**: Interactive maps

## 🚀 Project Setup

```bash
# Install dependencies
npm install

# Serve with hot-reload for development
npm run serve

# Compile and minify for production
npm run build
```

## 📁 Project Structure

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

## 📚 Component Documentation

### 🏗️ Layout Components
- **🔵 SidebarNav**: Main navigation sidebar
- **🔝 HeaderComponent**: Page header with filters and date selection
- **📋 MaintenanceOverview**: Summary statistics and metrics

### 📊 Data Visualization
- **📉 TicketingChart**: Multi-line chart showing creation and completion rates
- **📊 StackedBarChart**: Monthly performance by category
- **📏 SingleBarChart**: Cost distribution visualization

### 🎮 Interactive Elements
- **🔢 PortfolioDetail**: Searchable and sortable table of portfolio items
- **🗺️ MapComponent**: Geographic visualization of property locations

## 📱 Responsive Design

The dashboard is fully responsive and provides an optimal viewing experience across a wide range of devices:

- **🖥️ Desktop**: Full-featured layout with side-by-side components
- **💻 Tablet**: Adapted layout with resized components
- **📱 Mobile**: Stacked layout with touch-friendly controls

## 📝 Development Notes

This project was developed as part of an internship assignment for Avrio Energy, focusing on creating a pixel-perfect implementation of the provided design while ensuring code quality, component reusability, and responsive design.

## 🔮 Future Enhancements

- **🔐 User Authentication**: Role-based access control
- **⚡ Real-time Updates**: Live data updates through WebSockets
- **📄 Export Functionality**: PDF export for reports and analytics
- **🌙 Dark Mode**: Alternative theme option
- **📲 Mobile App**: Native version with enhanced mobile features

---

<div align="center">
  <p>
    <a href="https://github.com/imnexerio/Avrio-Energy">
      <img src="https://img.shields.io/badge/GitHub-View%20Repository-blue?style=for-the-badge&logo=github" alt="GitHub Repository" />
    </a>
  </p>
  <p>Developed with ❤️ by <a href="https://github.com/imnexerio">imnexerio</a></p>
</div>
