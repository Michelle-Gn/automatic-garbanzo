import http from 'k6/http';
import { sleep } from 'k6';
import { API_URL } from '../../client/src/config/config.js';

export let options = {
  stages: [
    { duration: '15s', target: 1 }, // 1 RPS
    { duration: '15s', target: 10 }, // 10 RPS
    { duration: '15s', target: 100 }, // 100 RPS
    { duration: '15s', target: 1000 } // 1000 RPS
  ]
};

export default function () {

  let responses = http.batch([
    ['GET',
      `${API_URL}/qa/questions?product_id=42366&page=1&count=1000`,
      null,
      { tags: { name: 'Get Questions' } }
    ],
    ['PUT',
      `${API_URL}/qa/questions/3518963/helpful`,
      null,
      { tags: {name: 'Update Question Helpfulness'}},
    ],
    ['PUT',
      `${API_URL}/qa/questions/3518963/report`,
      null,
      { tags: {name: 'Report Question'}},
    ],
    ['GET',
     `${API_URL}/qa/questions/3518963/answers?page=1&count=1000`,
      null,
      { tags: { name: 'Get Answers' } },
    ],
    ['PUT',
      `${API_URL}/qa/answers/6879306/helpful`,
      null,
      { tags: { name: 'Update Answer Helpfulness' } }
    ],
    ['PUT',
      `${API_URL}/qa/answers/6879306/report`,
      null,
      { tags: { name: 'Report answer'}}
    ]
  ]);

  sleep(1);
}
