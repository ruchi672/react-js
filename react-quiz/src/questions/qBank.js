const qBank =[
          {
            "id": 1,
            "instruction": "How many continents are there on Planet Earth?",
            "options": ["5", "6", "7", "8"],
            "answer": "7"
          },
          {
            "id": 2,
            "instruction": "What's your favorite number?",
            "options": ["1", "2", "3", "4"],
            "answer": "4"
          },
          {
            "id": 3,
            "instruction": "What's your favorite number?",
            "options": ["1", "2", "3", "4"],
            "answer": "4"
          }, 
          {
            "id": 4,
            "instruction": "What's your favorite number?",
            "options": ["1", "2", "3", "4"],
            "answer": "4"
          }, 
          {
            "id": 5,
            "instruction": "What's your favorite number?",
            "options": ["1", "2", "3", "4"],
            "answer": "4"
          },
          {
            "id": 6,
            "instruction": "What's your favorite bird?",
            "options": ["1", "2", "3", "4"],
            "answer": "4"
          },
          {
            "id": 7,
            "instruction": "What's your favorite color?",
            "options": ["1", "2", "3", "4"],
            "answer": "4"
          }
        ]
      
    export default (n = 5) =>
        Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
