# SmartDataX

**A Unified System for Data Ingestion, Processing, and Dashboard Visualization**

---

## 🚀 Project Overview

**SmartDataX** is an end-to-end data platform designed to automate the process of data ingestion, transformation, analysis, and visualization. The system helps bridge the gap between raw data and actionable business insights using modern data engineering and full-stack web development technologies.

---

## 🧠 Features

- 🔄 **ETL Pipelines** using Python and SQL
- 🔥 **Scalable Data Processing** on Databricks (Apache Spark)
- 📊 **Interactive Dashboards** with Power BI and Excel
- 🌐 **SmartDataX Platform** using Nextjs and expressjs
- 📁 **Supports Structured & Semi-structured Data**
- 📈 **Real-time and Business Insights**


---

## 🛠 Tech Stack

### Backend
- Express js
- MongoDB
- Rest API


### Frontend
- NextJS
- TailwindCSS
- Shadcn/UI

### Data Visualization
- Power BI
- Microsoft Excel

### Libraries & Tools
- Pandas, NumPy, Seaborn, Matplotlib
- PySpark
- Jupyter Notebook & VS Code

---

## 📦 Architecture

```text
      ┌────────────┐       ┌──────────────┐       ┌────────────┐
      │ Data Source│──────▶│   ETL (Python│──────▶│Databricks  │
      └────────────┘       │   & SQL)     │       │(Processing)│
                           └──────────────┘       └────┬───────┘
                                                        │
                                                        ▼
                                                ┌──────────────┐
                                                │ Cleaned Data │
                                                └────┬─────────┘
                                                     │
              ┌────────────────────┬─────────────────┘
              ▼                    ▼
       ┌─────────────┐      ┌─────────────┐
       │ Power BI    │      │ Web Frontend│
       └─────────────┘      └─────────────┘

