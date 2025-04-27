# 📐 Metric-Imperial Converter API

**A professional-grade conversion API that demonstrates clean architecture, rigorous testing, and production-ready code**

## 🚀 Key Features

- **Precision Conversions** between gallons/liters, miles/kilometers, and pounds/kilograms
- **Robust Input Validation** handles fractions, decimals, and complex number formats
- **Comprehensive Test Suite** with 100% test coverage (16 unit tests + 5 functional tests)
- **Production-Grade Architecture** following MVC patterns and separation of concerns
- **RESTful API Design** with proper status codes and error handling

## 💻 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![Mocha](https://img.shields.io/badge/Mocha-10.x-brown)
![Chai](https://img.shields.io/badge/Chai-4.x-yellow)

## 📚 API Documentation

### `GET /api/convert`

Convert between metric and imperial units.

**Parameters:**
- `input`: String containing number and unit to convert (e.g., "10L", "5.4mi", "1/2kg")

**Success Response:**
```json
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}
```

**Error Cases:**
- `invalid number` - Malformed numeric input (e.g., "3/2/3kg")
- `invalid unit` - Unsupported unit (e.g., "32g")
- `invalid number and unit` - Both number and unit are invalid

## 🛠️ Development Setup

1. **Clone repository**
   ```bash
   git clone https://github.com/lihuelworks/metric-imperial-converter.git
   cd metric-imperial-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Start development server**
   ```bash
   npm start
   ```

## 🧪 Testing Strategy

**Unit Tests (16)**
- Number parsing (whole numbers, decimals, fractions)
- Unit validation (case sensitivity, invalid units)
- Conversion logic (all unit combinations)
- String formatting

**Functional Tests (5)**
- Valid conversion requests
- Error handling for invalid inputs
- Default number behavior

```bash
npm test             # Run all tests
npm run test:unit    # Run only unit tests
npm run test:functional # Run only functional tests
```

## 🏗️ System Architecture

```
├── controllers/     # Business logic
│   └── convertHandler.js
├── routes/          # API endpoints
│   └── api.js
├── tests/           # Test suites
│   ├── 1_unit-tests.js
│   └── 2_functional-tests.js
├── server.js        # Application entry point
└── package.json     # Project configuration
```

## 🌟 Why This Stands Out

1. **Precision Engineering** - Handles edge cases like "5.4/2mi" and "3/7.2/4kg"
2. **Professional Standards** - 100% test coverage and CI/CD integration
3. **Production Ready** - Proper error handling and input validation
4. **Clean Code** - Follows SOLID principles and separation of concerns

## 📬 Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/lihuelworks/)