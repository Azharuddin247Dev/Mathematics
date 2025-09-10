const syllabusContentClass5 = {
  5: {
    "Place Value": {
      notes:
        "Understanding place value helps us read and write large numbers correctly. Each digit in a number has a specific place value based on its position. From right to left: ones, tens, hundreds, thousands, ten thousands, etc.",
      examples: [
        {
          title: "Reading Large Numbers",
          content:
            "In the number 45,672:<br>• 2 is in the ones place (value = 2)<br>• 7 is in the tens place (value = 70)<br>• 6 is in the hundreds place (value = 600)<br>• 5 is in the thousands place (value = 5,000)<br>• 4 is in the ten thousands place (value = 40,000)",
        },
        {
          title: "Writing Numbers in Expanded Form",
          content: "45,672 = 40,000 + 5,000 + 600 + 70 + 2",
        },
      ],
      practice: [
        {
          question: "What is the place value of 8 in 38,456?",
          answer: "8000",
          type: "input",
        },
        {
          question: "Write 25,347 in expanded form:",
          answer: "20000 + 5000 + 300 + 40 + 7",
          type: "input",
        },
        {
          question: "What is the value of 6 in 761,234?",
          answer: "60000",
          type: "input",
        },
        {
          question: "Identify the digit in the ten thousands place in 452,785.",
          answer: "5",
          type: "input",
        },
        {
          question: "What is the place value of 3 in 4,839?",
          answer: "30",
          type: "input",
        },
      ],
      quiz: [
        {
          question: "What is the place value of 7 in 372?",
          options: ["7", "70", "700", "7,000"],
          answer: "70",
        },
        {
          question: "What is the place value of 5 in 15,234?",
          options: ["5", "50", "500", "5,000"],
          answer: "5,000",
        },
        {
          question: "Which digit is in the hundreds place in 9,876?",
          options: ["6", "7", "8", "9"],
          answer: "8",
        },
        {
          question: "What is the place value of 2 in 52,371?",
          options: ["2", "20", "200", "2000"],
          answer: "2000",
        },
        {
          question: "In 124,589, what digit is in the ten thousands place?",
          options: ["1", "2", "4", "5"],
          answer: "2",
        },
      ],
    },
    "Basic Operations": {
      notes:
        "The four basic operations are addition, subtraction, multiplication, and division. These are fundamental skills for all mathematics. Addition combines numbers, subtraction finds the difference, multiplication is repeated addition, and division splits numbers into equal parts.",
      examples: [
        {
          title: "Addition with Carrying",
          content:
            "Example: 247 + 186<br>Step 1: 7 + 6 = 13 (write 3, carry 1)<br>Step 2: 4 + 8 + 1 = 13 (write 3, carry 1)<br>Step 3: 2 + 1 + 1 = 4<br>Answer: 433",
        },
        {
          title: "Multiplication by Two-Digit Numbers",
          content:
            "Example: 23 × 45<br>23 × 5 = 115<br>23 × 40 = 920<br>115 + 920 = 1,035",
        },
      ],
      practice: [
        { question: "Calculate: 456 + 287", answer: "743", type: "input" },
        { question: "Calculate: 24 × 15", answer: "360", type: "input" },
        { question: "What is 123 - 57?", answer: "66", type: "input" },
        { question: "Calculate: 81 ÷ 9", answer: "9", type: "input" },
        { question: "Multiply: 17 × 6", answer: "102", type: "input" },
      ],
      quiz: [
        {
          question: "What is 15 + 27?",
          options: ["32", "42", "52", "22"],
          answer: "42",
        },
        {
          question: "What is 144 ÷ 12?",
          options: ["10", "11", "12", "13"],
          answer: "12",
        },
        {
          question: "What is 25 × 4?",
          options: ["90", "100", "110", "120"],
          answer: "100",
        },
        {
          question: "Calculate 50 - 23:",
          options: ["27", "28", "29", "26"],
          answer: "27",
        },
        {
          question: "What is 9 × 8?",
          options: ["63", "72", "81", "69"],
          answer: "72",
        },
      ],
    },
    Fractions: {
      notes:
        "A fraction represents a part of a whole. It has a numerator (top number) and denominator (bottom number). The denominator shows how many equal parts the whole is divided into, and the numerator shows how many parts we have.",
      examples: [
        {
          title: "Understanding Fractions",
          content:
            "In the fraction 3/4:<br>• 4 is the denominator (whole divided into 4 parts)<br>• 3 is the numerator (we have 3 parts)<br>• This means 3 out of 4 equal parts",
        },
        {
          title: "Equivalent Fractions",
          content:
            "1/2 = 2/4 = 3/6 = 4/8<br>These fractions represent the same amount but are written differently.",
        },
      ],
      practice: [
        {
          question:
            "What fraction of the circle is shaded if 3 out of 8 parts are colored?",
          answer: "3/8",
          type: "input",
        },
        {
          question: "Write an equivalent fraction for 1/3 with denominator 9:",
          answer: "3/9",
          type: "input",
        },
        { question: "What is 2/5 + 1/5?", answer: "3/5", type: "input" },
        {
          question: "Simplify the fraction 6/12:",
          answer: "1/2",
          type: "input",
        },
        {
          question: "Write the fraction 4/6 in simplest form:",
          answer: "2/3",
          type: "input",
        },
      ],
      quiz: [
        {
          question: "Which fraction is equivalent to 1/2?",
          options: ["2/4", "3/5", "1/3", "2/3"],
          answer: "2/4",
        },
        {
          question: "Which fraction is larger: 2/3 or 3/4?",
          options: ["2/3", "3/4", "They are equal", "Cannot determine"],
          answer: "3/4",
        },
        {
          question: "What is 1/4 + 1/4?",
          options: ["1/8", "2/8", "1/2", "2/4"],
          answer: "1/2",
        },
        {
          question: "Which is smaller: 3/5 or 4/5?",
          options: ["3/5", "4/5"],
          answer: "3/5",
        },
        {
          question: "What is 3/10 + 2/10?",
          options: ["1/5", "1/2", "1/10", "5/10"],
          answer: "1/2",
        },
      ],
    },
    Decimals: {
      notes:
        "Decimals are another way to represent fractions. The decimal point separates the whole number from the fractional part. The first digit after the decimal point is tenths, the second is hundredths, and so on.",
      examples: [
        {
          title: "Reading Decimals",
          content:
            "In 3.45:<br>• 3 is the whole number part<br>• 4 is in the tenths place (4/10)<br>• 5 is in the hundredths place (5/100)<br>• Read as: three and forty-five hundredths",
        },
        {
          title: "Converting Fractions to Decimals",
          content: "1/2 = 0.5<br>1/4 = 0.25<br>3/4 = 0.75<br>1/10 = 0.1",
        },
      ],
      practice: [
        {
          question: "Convert 3/4 to a decimal:",
          answer: "0.75",
          type: "input",
        },
        { question: "What is 2.3 + 1.7?", answer: "4.0", type: "input" },
        { question: "Write 0.6 as a fraction:", answer: "3/5", type: "input" },
        { question: "Subtract: 5.7 - 2.2", answer: "3.5", type: "input" },
        { question: "Multiply: 0.4 × 5", answer: "2.0", type: "input" },
      ],
      quiz: [
        {
          question: "What is 0.5 as a fraction?",
          options: ["1/2", "1/3", "1/4", "1/5"],
          answer: "1/2",
        },
        {
          question: "Which decimal is equivalent to 3/10?",
          options: ["0.03", "0.3", "3.0", "30.0"],
          answer: "0.3",
        },
        {
          question: "What is 0.25 + 0.25?",
          options: ["0.4", "0.5", "0.6", "0.75"],
          answer: "0.5",
        },
        {
          question: "What is 1.5 times 2?",
          options: ["2", "3", "4", "5"],
          answer: "3",
        },
        {
          question: "What is 0.1 + 0.2?",
          options: ["0.2", "0.3", "0.4", "0.5"],
          answer: "0.3",
        },
      ],
    },
    Measurement: {
      notes:
        "We measure length, weight, capacity, and time using standard units. Length is measured in millimeters, centimeters, meters, and kilometers. Weight is measured in grams and kilograms. Capacity is measured in milliliters and liters.",
      examples: [
        {
          title: "Length Conversions",
          content:
            "1 meter = 100 centimeters<br>1 centimeter = 10 millimeters<br>1 kilometer = 1000 meters<br>Example: 2.5 meters = 250 centimeters",
        },
        {
          title: "Weight and Capacity",
          content:
            "1 kilogram = 1000 grams<br>1 liter = 1000 milliliters<br>Example: 2.5 kg = 2500 grams",
        },
      ],
      practice: [
        {
          question: "Convert 3 meters to centimeters:",
          answer: "300",
          type: "input",
        },
        {
          question: "How many grams are in 2.5 kilograms?",
          answer: "2500",
          type: "input",
        },
        {
          question: "Convert 5000 milliliters to liters:",
          answer: "5",
          type: "input",
        },
        {
          question: "How many millimeters are in 7 centimeters?",
          answer: "70",
          type: "input",
        },
        {
          question: "Convert 1.2 kilometers to meters:",
          answer: "1200",
          type: "input",
        },
      ],
      quiz: [
        {
          question: "How many centimeters are in 1 meter?",
          options: ["10", "100", "1000", "10000"],
          answer: "100",
        },
        {
          question: "How many milliliters are in 2 liters?",
          options: ["200", "2000", "20000", "200000"],
          answer: "2000",
        },
        {
          question: "Which unit is best for measuring the length of a pencil?",
          options: ["Kilometers", "Meters", "Centimeters", "Millimeters"],
          answer: "Centimeters",
        },
        {
          question: "How many grams are in 3 kilograms?",
          options: ["300", "3000", "30000", "300000"],
          answer: "3000",
        },
        {
          question: "How many meters are in 5 kilometers?",
          options: ["500", "5000", "50", "50000"],
          answer: "5000",
        },
      ],
    },
    Geometry: {
      notes:
        "Basic shapes include triangles, squares, rectangles, and circles. Each shape has specific properties. A triangle has 3 sides, a square has 4 equal sides and 4 right angles, a rectangle has 4 sides with opposite sides equal, and a circle is perfectly round.",
      examples: [
        {
          title: "Properties of Shapes",
          content:
            "Triangle: 3 sides, 3 angles<br>Square: 4 equal sides, 4 right angles<br>Rectangle: 4 sides, opposite sides equal, 4 right angles<br>Circle: No sides, perfectly round",
        },
        {
          title: "Identifying Shapes",
          content:
            "Look for key features:<br>• Count the sides<br>• Check if sides are equal<br>• Look for right angles (90°)",
        },
      ],
      practice: [
        {
          question: "How many sides does a pentagon have?",
          answer: "5",
          type: "input",
        },
        {
          question: "What shape has 4 equal sides and 4 right angles?",
          answer: "square",
          type: "input",
        },
        {
          question: "How many angles does a triangle have?",
          answer: "3",
          type: "input",
        },
        {
          question: "A circle has how many sides?",
          answer: "0",
          type: "input",
        },
        {
          question: "How many sides does a hexagon have?",
          answer: "6",
          type: "input",
        },
      ],
      quiz: [
        {
          question: "How many sides does a triangle have?",
          options: ["2", "3", "4", "5"],
          answer: "3",
        },
        {
          question: "Which shape has 4 equal sides?",
          options: ["Triangle", "Rectangle", "Square", "Circle"],
          answer: "Square",
        },
        {
          question: "How many right angles does a rectangle have?",
          options: ["2", "3", "4", "5"],
          answer: "4",
        },
        {
          question: "How many sides does a pentagon have?",
          options: ["4", "5", "6", "7"],
          answer: "5",
        },
        {
          question: "What shape has no sides?",
          options: ["Square", "Circle", "Triangle", "Rectangle"],
          answer: "Circle",
        },
      ],
    },
    "Data Handling": {
      notes:
        "We can collect, organize, and present data using tables, charts, and graphs to understand information better. Bar graphs compare different categories, line graphs show changes over time, and pie charts show parts of a whole.",
      examples: [
        {
          title: "Reading a Bar Graph",
          content:
            "In a bar graph showing favorite fruits:<br>• The height of each bar shows the number of people<br>• Compare bars to see which fruit is most popular<br>• The x-axis shows categories, y-axis shows values",
        },
        {
          title: "Creating a Simple Table",
          content:
            "Favorite Colors Survey:<br>Red: 8 students<br>Blue: 12 students<br>Green: 6 students<br>Yellow: 4 students",
        },
      ],
      practice: [
        {
          question:
            "If a bar graph shows Apple=10, Orange=8, Banana=12, which fruit is most popular?",
          answer: "banana",
          type: "input",
        },
        {
          question:
            "In a class of 30 students, if 12 like math, how many don't like math?",
          answer: "18",
          type: "input",
        },
        {
          question:
            "If 15 students like football and 20 like cricket, how many students are there in total?",
          answer: "35",
          type: "input",
        },
        {
          question: "What type of graph shows parts of a whole?",
          answer: "pie chart",
          type: "input",
        },
        {
          question: "Which graph is best to show changes over time?",
          answer: "line graph",
          type: "input",
        },
      ],
      quiz: [
        {
          question: "What is the most common way to show data comparison?",
          options: ["Table", "Bar graph", "Circle", "Line"],
          answer: "Bar graph",
        },
        {
          question: "What type of graph is best for showing changes over time?",
          options: ["Bar graph", "Pie chart", "Line graph", "Table"],
          answer: "Line graph",
        },
        {
          question: "In a pie chart, what do all the parts add up to?",
          options: ["50%", "75%", "100%", "200%"],
          answer: "100%",
        },
        {
          question: "Which graph is best for comparing categories?",
          options: ["Line graph", "Bar graph", "Pie chart", "Histogram"],
          answer: "Bar graph",
        },
        {
          question: "Which graph shows data over a period?",
          options: ["Pie chart", "Line graph", "Bar graph", "Table"],
          answer: "Line graph",
        },
      ],
    },
  },
};
