# AI Automation + Mini App + Vibe Coding cho thị trường Non-IT Đà Nẵng
Giáo trình thực hành từ số 0 → xây sản phẩm → triển khai → tạo portfolio → chuẩn bị đi làm. Phiên bản nghiên cứu: 19/09/2026.

Định vị mục tiêu: trở thành một người có nền tảng Computer Science nhưng có khả năng dùng AI, automation, web, API, database và Mini App để giải quyết quy trình thực tế của doanh nghiệp non-IT.

## Tuyên bố quan trọng
Vibe coding không được xem là một nghề độc lập. Trong tài liệu này, vibe coding là phương pháp làm việc AI-assisted: dùng AI để sinh, sửa và khám phá code nhanh nhưng con người chịu trách nhiệm về yêu cầu, kiến trúc, kiểm thử, bảo mật, dữ liệu, chi phí, vận hành và kết quả kinh doanh.

Portfolio không được xây theo kiểu “5 website CRUD giống nhau”. Mỗi dự án phải chứng minh chuỗi năng lực: vấn đề kinh doanh → quy trình → dữ liệu → giải pháp → AI/automation → sản phẩm → đo lường → triển khai → tài liệu.

## Mục tiêu đầu ra
| Năng lực | Đầu ra có thể kiểm chứng |
|---|---|
| Programming | JavaScript/TypeScript hoặc Python đủ chắc để đọc, sửa, debug code AI sinh ra |
| Web & API | Tự xây và tích hợp REST API, webhook, auth, OAuth, upload, pagination, error handling |
| Backend & data | Node.js + PostgreSQL, schema, migration, transaction, index, query, logging |
| Frontend | React + Next.js, form, data fetching, state, validation, responsive UX |
| Automation | n8n + API + webhook + retry + branching + human-in-the-loop |
| AI application | LLM, structured output, function/tool calling, RAG, agents, evals, guardrails, cost control |
| MCP | Biết MCP là lớp kết nối tool/context cho agent; biết khi nào dùng, khi nào không dùng |
| Mini App | Xây và phát hành Zalo Mini App, kết nối backend, xử lý auth/CORS/platform constraints |
| DevOps | Linux, Docker, env/secrets, CI/CD cơ bản, deploy, domain/HTTPS |
| Reliability | Logs, metrics, tracing cơ bản, alerting, backup, rollback, incident notes |
| Security | OWASP mindset, authN/authZ, secret management, validation, rate limiting, least privilege |
| Business | Discovery, process mapping, KPI, ROI sơ bộ, user story, acceptance criteria |
| Career | CV/GitHub/LinkedIn/portfolio website và 4–6 case studies có demo/video |

## Bản đồ năng lực
```text
BUSINESS PROBLEM
      v
PROCESS MAPPING -> DATA -> KPI
      v
SOLUTION DESIGN
      v
WEB / API / DB / AUTOMATION / AI / MINI APP
      v
TEST -> SECURITY -> OBSERVABILITY
      v
DEPLOY -> MEASURE -> ITERATE
      v
CASE STUDY -> PORTFOLIO -> JOB / CLIENT
```

Các kỹ năng bên trên không học theo thứ tự “học xong lý thuyết rồi mới làm”. Từ tuần đầu đã làm bài nhỏ. Mỗi giai đoạn có 4 lớp: hiểu → làm → phá → sửa → ghi lại.

## Nghiên cứu thị trường 2026 và vì sao lộ trình này được mở rộng
Đà Nẵng đang đặt chuyển đổi số, kinh tế số và AI vào nhóm động lực tăng trưởng. Kế hoạch chuyển đổi số 2026 có các chỉ tiêu về AI trong dịch vụ công, kinh tế số và đào tạo kỹ năng số; thành phố đồng thời công bố mục tiêu trở thành “Thành phố AI” vào năm 2030. [S1][S2]

Đến tháng 6/2026, Đà Nẵng công bố hệ sinh thái AI có hơn 60 đơn vị hoạt động trong nhóm ứng dụng AI và 12 cơ sở đào tạo/nghiên cứu; 4.695 sinh viên được đào tạo/bồi dưỡng AI và ngành gần. [S2]

Các tin tuyển dụng hiện có tại Đà Nẵng cho thấy những giao điểm rất gần với hướng học này: Go Media từng tuyển AI Automation & Tech-Marketing với n8n và “Vibe Code” để làm Mini App/Tool/Website/SaaS; pTrackly tuyển Fullstack TypeScript/Next.js cho sản phẩm compliance automation; KMS tuyển Generative AI Automation Lead tại Đà Nẵng với agent, RAG, tool calling và MCP. Đây là bằng chứng về hướng nhu cầu, không phải bằng chứng về tỷ lệ có việc làm. [S4][S5][S6]

Khảo sát Stack Overflow 2025 cho thấy AI đã trở thành phần rõ rệt của quy trình phát triển nhưng niềm tin vào output vẫn là vấn đề; 52% người trả lời cho biết chưa dùng agent hoặc chỉ dùng công cụ AI đơn giản, và 38% chưa có kế hoạch dùng agent. Điều này củng cố nguyên tắc của giáo trình: học cách kiểm chứng và vận hành AI, không chỉ học prompt. [S7][S8]

WEF Future of Jobs 2025 tiếp tục liệt kê AI & big data, networks & cybersecurity và technological literacy trong nhóm kỹ năng công nghệ tăng nhanh; analytical thinking, creative thinking và lifelong learning cũng quan trọng. Đây là lý do tài liệu thêm data, security, business reasoning và thói quen học liên tục. [S29]

## Nguyên tắc học
- 1. Một thời điểm chỉ làm một task chính. Không nhảy phase khi checkpoint chưa đạt.
- 2. AI là trợ lý, không phải người sở hữu kiến thức. Code phải được đọc, chạy, test và giải thích lại bằng lời của bạn.
- 3. Mỗi khái niệm phải có một bài thực hành nhỏ trước khi ghép vào project lớn.
- 4. Ưu tiên tài liệu chính thức. TypeScript khuyên người mới có JavaScript nên nắm JS trước; React hiện khuyến nghị dùng framework cho app mới; Next.js là React framework cho full-stack web app. [S10][S11][S12]
- 5. Không chạy theo mọi tool. Giữ một “core stack” ổn định và học nguyên lý để đổi tool khi thị trường thay đổi.
- 6. Mọi project đều phải có README, architecture diagram, setup guide, test, screenshots, demo video và postmortem.
- 7. Học tiếng Anh kỹ thuật song song: đọc docs, issue, API reference, changelog, error message mỗi ngày.

# PHẦN I — KHUNG CHƯƠNG TRÌNH
## Thời lượng đề xuất
| Giai đoạn | Thời lượng | Mục tiêu |
|---|---|---|
| 0. Setup + cách học | 1–2 tuần | Thiết lập môi trường, Git, terminal, quy trình học với AI |
| 1. JavaScript + TypeScript + Git + HTTP + REST | 8 tuần | Nền tảng lập trình và giao tiếp hệ thống |
| 2. Node.js + PostgreSQL + React/Next.js | 10 tuần | Full-stack app hoàn chỉnh |
| 3. n8n + Webhook + OAuth + Integration | 5 tuần | Automation và kết nối hệ thống |
| 4. LLM + Structured Output + Tools + RAG + Agent + MCP | 8 tuần | AI application engineering |
| 5. Zalo Mini App | 5 tuần | Sản phẩm native trên nền tảng local |
| 6. Docker + Linux + Deploy + Monitoring + Security | 6 tuần | Production readiness |
| 7. Business Analysis + Product + Sales/Communication | 4 tuần | Biến code thành giải pháp |
| 8. Portfolio + Job/Client | 6–8 tuần | Case study, hồ sơ, phỏng vấn, outreach |
| Xuyên suốt | 40–48 tuần | 4–6 portfolio projects + kỹ năng nghề nghiệp |

Nếu học 15 giờ/tuần: 10–12 tháng là nhịp bền vững. Nếu học 20–25 giờ/tuần và tận dụng AI tốt nhưng vẫn tự kiểm chứng: có thể rút ngắn. Không đặt mục tiêu “xong thật nhanh”; đặt mục tiêu “đầu ra kiểm chứng được”.

## Kỹ năng bền vững 2026–2031 vs kỹ năng dễ thay đổi
| Nhóm | Tính ổn định | Cách học |
|---|---|---|
| HTTP, REST, SQL, Git, testing, security | Rất bền | Học bản chất, tự code và debug |
| JavaScript/TypeScript, Node, React/Next | Bền nhưng framework thay đổi | Nắm language/runtime fundamentals; theo docs chính thức |
| LLM application patterns | Bền ở cấp khái niệm | Học schema, tools, retrieval, evals, guardrails |
| AI coding agents | Hướng tăng trưởng nhưng tool thay đổi | Học agent workflow, repo context, review, tests |
| MCP | Có giá trị như integration protocol nhưng spec/tooling còn thay đổi | Học protocol + security, không phụ thuộc vendor |
| n8n/Make/Zapier | Tool-level, có thể thay đổi | Học automation patterns và API integration |
| Zalo Mini App | Platform-level, phụ thuộc hệ sinh thái | Học mobile/web fundamentals + platform docs/changelog |
| Cloud/deployment | Bền ở cấp nguyên lý | Linux, containers, networking, DNS, HTTPS, logs trước cloud-specific features |
| Business analysis/KPI/communication | Rất bền | Luyện qua phỏng vấn giả lập và case study |

Nguyên tắc 5–7 năm: học cái nằm dưới tool. Ví dụ không cần nhớ mọi node n8n; cần hiểu webhook, transformation, retry và idempotency. Không cần nhớ mọi API của một model; cần hiểu structured output, tool calling, retrieval và evaluation.

## 90 ngày đầu — đường ray chống ngợp cho người bắt đầu từ số 0
| Tuần | Mục tiêu | Bài thực hành bắt buộc |
|---|---|---|
| 1–2 | Terminal + Git + JS rất cơ bản | 20 lệnh terminal + 15 bài JS + 5 commit |
| 3–4 | Objects/arrays/functions/errors | CLI xử lý danh sách khách hàng |
| 5–6 | Async/await + fetch + JSON | gọi 2 API và tạo báo cáo |
| 7–8 | TypeScript | typed data model + validation |
| 9–10 | HTTP/REST + Node | CRUD API nhỏ |
| 11–12 | PostgreSQL + SQL | ERD + 10 query + API nối DB |

Sau 90 ngày chưa cần học Agent, RAG hay Mini App. Đường ray đúng là: hiểu dữ liệu → hiểu HTTP → hiểu API → hiểu DB. Những phần sau sẽ nhẹ hơn rất nhiều.

## Core stack khuyến nghị
| Lớp | Chọn làm core | Không cần học ngay |
|---|---|---|
| Language | JavaScript → TypeScript; Python bổ trợ cho AI/data | Java, Go, Rust cùng lúc |
| Frontend | React + Next.js | Nhiều framework frontend cùng lúc |
| Backend | Node.js + TypeScript | Nhiều backend framework song song |
| Database | PostgreSQL | 5 loại SQL/NoSQL cùng lúc |
| Automation | n8n | Học sâu cả n8n + Make + Zapier ngay từ đầu |
| AI | Một API LLM chính + hiểu abstraction | Thử mọi model/tool mỗi tuần |
| Agent | OpenAI Agents SDK hoặc agent framework tương đương | Multi-agent phức tạp ngay từ đầu |
| Context/Tools | MCP cơ bản | Tự viết MCP server lớn ngay khi chưa chắc API |
| Platform | Zalo Mini App | Học nhiều mini-app ecosystem cùng lúc |
| Infra | Docker + Linux + một cloud/platform deploy | Kubernetes sớm |
| Observability | Structured logs + metrics + tracing cơ bản | Monitoring stack quá phức tạp |
| Version control | Git + GitHub | Mười Git hosting platform |

# PHẦN II — GIAI ĐOẠN 0: SETUP VÀ CÁCH HỌC
## Bạn cần hiểu gì trước khi code?
- File và folder; path tuyệt đối/tương đối; extension; terminal; process; port.
- Internet cơ bản: browser gửi request đến server, server trả response.
- Git: working tree, staging, commit, branch, merge, remote.
- Editor/IDE: terminal tích hợp, search, format, lint, debug.
- AI coding workflow: yêu cầu → plan → patch nhỏ → test → review → commit.

## Lab 0.1 — Terminal survival
Thực hành: mở terminal, tạo thư mục, tạo file, vào/ra folder, xem nội dung, chạy một file JS, tìm một file, xóa file thử nghiệm. Mục tiêu là không còn sợ terminal.

```powershell
mkdir bootcamp-lab
cd bootcamp-lab
mkdir week01
cd week01
echo console.log("hello") > hello.js
node hello.js
```

## Lab 0.2 — Git survival
```bash
git init
git status
git add .
git commit -m "chore: start lab"
git log --oneline
```

Bài nộp: ảnh terminal + repository GitHub + README 10 dòng giải thích 5 lệnh trên.

## Quy tắc dùng AI từ ngày đầu
```text
Prompt tốt:
"Tôi đang học JavaScript. Đừng viết toàn bộ bài cho tôi. Hãy giải thích khái niệm object mutation bằng ví dụ 10 dòng, sau đó cho tôi 3 bài tập tăng dần. Sau mỗi bài, chờ tôi trả lời."
```

Không dùng prompt kiểu “build everything”. Bạn đang xây năng lực kiểm soát AI, không phải xây thói quen phụ thuộc AI.

# PHẦN III — GIAI ĐOẠN 1: JAVASCRIPT + TYPESCRIPT + GIT + HTTP + REST API
## Mục tiêu
Kết thúc phase này, bạn có thể đọc một file JS/TS, giải thích dữ liệu chạy thế nào, viết function nhỏ, xử lý object/array, async code, gọi API, xử lý lỗi, tạo Git history có nghĩa và giải thích HTTP bằng ví dụ.

## Module 1 — JavaScript cơ bản
| Chủ đề | Phải hiểu | Bài tập |
|---|---|---|
| Variables & types | string, number, boolean, null, undefined, bigint; const/let | viết 20 biến và dự đoán typeof |
| Condition | if/else, switch, ternary | pricing calculator |
| Loops | for, while, for...of | lọc danh sách khách hàng |
| Functions | parameter, return, scope | 10 function nhỏ |
| Arrays | map, filter, find, reduce, sort | xử lý đơn hàng |
| Objects | reference, mutation, destructuring, spread | copy primitive vs object |
| Modules | import/export | chia project thành 5 module |
| Errors | throw, try/catch/finally | API simulator có lỗi |

## Module 2 — JavaScript mental models
Đây là phần phải học chậm. Trọng tâm: value vs reference, call stack, event loop ở mức trực quan, synchronous vs asynchronous, Promise, async/await, closures ở mức cần dùng, truthy/falsy, equality, mutation/immutability.

## Lab 1.1 — Primitive vs object copy
```js
let a = 10;
let b = a;
b = 20;
console.log(a, b);

const user1 = { name: "An", score: 10 };
const user2 = user1;
user2.score = 99;
console.log(user1.score, user2.score);
```

Bạn phải tự giải thích vì sao dòng cuối in 99/99. Không được chỉ nhớ “object nằm ở heap”. Hãy hiểu rằng biến chứa tham chiếu tới cùng object và assignment tạo thêm một reference tới object đó.

## Module 3 — TypeScript
TypeScript là lớp kiểm tra kiểu tĩnh cho JavaScript. Học theo thứ tự: annotations → inference → object types → unions → narrowing → interfaces/type aliases → generics → utility types → modules → tsconfig → strictness. Tài liệu TypeScript chính thức khuyến nghị người chưa có nền JS nên học JS trước. [S10]

## Lab 1.2 — Type-safe order
```ts
type OrderStatus = "pending" | "paid" | "cancelled";

type Order = {
  id: string;
  customerName: string;
  total: number;
  status: OrderStatus;
};

function canShip(order: Order): boolean {
  return order.status === "paid";
}
```

Mở rộng: thêm discount, tax, currency; viết test cho canShip; cố tình truyền sai type và đọc error TypeScript thay vì hỏi AI.

## Module 4 — Git/GitHub
Học: commit atomic, branch, pull request, merge/rebase ở mức thực hành, .gitignore, README, issue, release/tag. Không cần thành Git expert nhưng phải biết cứu mình khỏi lỗi và kể lại lịch sử thay đổi.

## Module 5 — HTTP và REST
Cần hiểu request/response, method, URL, path parameter, query parameter, headers, body, JSON, status code, content type, idempotency ở mức cơ bản, pagination, rate limit và auth.

```text
GET    /customers
GET    /customers/42
POST   /customers
PATCH  /customers/42
DELETE /customers/42
```

## Checkpoint Phase 1
- Có thể viết một CLI nhỏ bằng Node để đọc JSON và tạo báo cáo.
- Có thể tự gọi một public API bằng fetch và xử lý loading/error.
- Có thể giải thích 10 status codes thường gặp.
- Có repository với ít nhất 20 commit có ý nghĩa.
- Có README chứa setup, usage, architecture đơn giản.
- Có thể đọc code AI sinh ra và đánh dấu phần chưa hiểu.

# PHẦN IV — GIAI ĐOẠN 2: NODE.JS + POSTGRESQL + REACT/NEXT.JS
## Mục tiêu
Xây một web app hoàn chỉnh có frontend, backend, database, validation, auth cơ bản và deploy thử.

## Module 2.1 — Node.js
Học runtime, npm/pnpm, package.json, modules, environment variables, filesystem ở mức cần thiết, HTTP server, Express/Fastify/NestJS conceptually, middleware, validation, error middleware, config.

Khi chọn runtime production, dùng một bản Node LTS ổn định thay vì chạy bản Current chỉ vì mới. Tại ngày 19/09/2026, Node.js 24 là LTS còn 26 là Current. [S9]

## Module 2.2 — PostgreSQL
Tập trung vào data modeling trước ORM: entity, relationship, normalization, PK/FK, unique, not null, check, index, join, transaction, isolation ở mức thực dụng, migration, seed.

PostgreSQL 18 là dòng current trong tài liệu chính thức tại thời điểm viết. [S13]

## Lab 2.1 — Data model cho một doanh nghiệp
```text
customers
- id
- name
- phone
- created_at

orders
- id
- customer_id -> customers.id
- status
- total
- created_at

order_items
- id
- order_id -> orders.id
- product_id
- quantity
- unit_price
```

Bài tập: tự vẽ ERD, viết SQL CREATE TABLE, seed 30 customers, 100 orders, 300 items; sau đó viết 10 query có join, group by và aggregate.

## Module 2.3 — React
Học component, props, state, event, form, controlled inputs, effects ở mức cần dùng, lifting state, conditional rendering, lists, composition, data fetching, error/loading states. React documentation hiện cung cấp Quick Start tập trung 80% concept dùng hằng ngày. [S11]

## Module 2.4 — Next.js
Học routing, layouts, server/client components ở mức thực dụng, data fetching, server actions/API routes khi phù hợp, metadata, loading/error, caching conceptually, deployment. Next.js hiện được tài liệu chính thức mô tả là React framework để xây full-stack web apps. [S12]

## Project 1 — Local Service CRM
Bài toán: một doanh nghiệp dịch vụ địa phương có khách hàng, lịch hẹn và trạng thái chăm sóc. Xây web app nội bộ.

- MVP: customer CRUD, appointment CRUD, status board, search/filter.
- Backend: REST API, validation, pagination, error format.
- Database: customers, appointments, notes, users.
- Auth: login + role admin/staff.
- Quality: unit test cho business rules + integration test cho API.
- Deploy: public URL + database production/sandbox.
- Portfolio: problem statement + architecture + screenshots + demo video + lessons learned.

## Checkpoint Phase 2
Bạn phải demo app từ browser → API → database và ngược lại. Nếu không thể giải thích một request đi qua những lớp nào, chưa đạt checkpoint.

# PHẦN V — GIAI ĐOẠN 3: n8n + WEBHOOK + OAUTH + API INTEGRATION
## Mental model
```text
EVENT -> WEBHOOK -> VALIDATE -> TRANSFORM -> DECIDE -> CALL API -> STORE -> NOTIFY -> LOG
                                 \ ERROR/RETRY /
```

Automation engineering không phải nối node cho đẹp. Nó là thiết kế một luồng xử lý có đầu vào, điều kiện, side effects, lỗi, retry, timeout, idempotency và người chịu trách nhiệm.

## Module 3.1 — n8n fundamentals
- Trigger: webhook, schedule, polling.
- Input/output JSON giữa node.
- Expression và mapping.
- Branching/IF/Switch.
- Loop/batch.
- HTTP Request.
- Database node.
- Credentials.
- Execution history.
- Error branch và retry.

## Lab 3.1 — Lead automation
Input: form đăng ký. Workflow: webhook → validate phone/email → normalize text → lưu PostgreSQL → AI classify lead → nếu hot thì notify sales → nếu invalid thì đưa hàng lỗi → log execution.

## Module 3.2 — OAuth
Phải hiểu authorization code flow ở mức thực dụng, access token vs refresh token, scope, redirect URI, secret, expiration. Không copy token vào source code.

## Module 3.3 — Integration patterns
| Pattern | Ví dụ | Rủi ro cần học |
|---|---|---|
| Webhook | Form → n8n | replay/duplicate |
| Polling | n8n đọc API định kỳ | rate limit |
| Sync API | CRM ↔ database | source-of-truth conflict |
| Async queue | event → worker | retry/idempotency |
| Human-in-loop | AI draft → nhân viên duyệt | stalled workflow |
| Scheduled batch | đồng bộ mỗi đêm | partial failure |

## Project 2 — Marketing/Sales Automation
Xây hệ thống lead intake có form/webhook, CRM tối giản, n8n, email/Zalo-compatible notification layer, AI classification và dashboard KPI.

## Checkpoint Phase 3
- Bạn có thể vẽ workflow trước khi mở n8n.
- Bạn biết chỗ nào phải retry và chỗ nào không được retry.
- Bạn hiểu duplicate event và cách chống tạo bản ghi trùng.
- Bạn có execution logs và một đường xử lý lỗi rõ ràng.
- Bạn có thể mô tả ROI sơ bộ: thời gian trước/sau automation.

# PHẦN VI — GIAI ĐOẠN 4: LLM + STRUCTURED OUTPUT + TOOLS + RAG + AGENTS + MCP
## Tư duy AI application engineering
Không học “AI” như một khối mơ hồ. Học theo chuỗi: model input → instruction → output schema → tool → data → retrieval → state → evaluation → guardrail → monitoring → cost.

## Module 4.1 — LLM fundamentals
- tokens/context window ở mức thực dụng
- temperature ở mức khái niệm
- prompt hierarchy
- system/developer/user instruction
- hallucination
- grounding
- model selection theo task/cost/latency
- streaming và timeout

## Module 4.2 — Structured output
Hãy chuyển AI output từ “đoạn text nhìn có vẻ đúng” thành dữ liệu có schema để phần mềm kiểm tra. OpenAI hiện có tài liệu riêng về Structured Outputs và Function Calling; đây là các building blocks quan trọng cho ứng dụng AI có tính deterministic cao hơn. [S15][S16]

```ts
type LeadClassification = {
  category: "hot" | "warm" | "cold";
  reasons: string[];
  nextAction: string;
};
```

## Module 4.3 — Tool/function calling
AI không nên tự bịa dữ liệu nghiệp vụ. Cho model gọi tool đọc dữ liệu thật hoặc thực hiện hành động có kiểm soát. Function calling là cơ chế nối model với dữ liệu/hành động bên ngoài. [S15][S17]

```text
USER -> LLM
         v
     choose tool
         v
 get_customer(id=42)
         v
   real DB result
         v
       LLM
         v
 human-readable answer
```

## Module 4.4 — RAG
RAG = retrieval-augmented generation. Học pipeline: ingest → clean → chunk → embed/index → retrieve → rerank (khi cần) → prompt context → answer + citations → evaluate. Không bắt đầu bằng vector database trước khi hiểu retrieval problem.

## Lab 4.1 — Internal knowledge assistant
Tạo 30–50 tài liệu giả lập về chính sách công ty. Build RAG. Viết 30 câu hỏi test. Chấm: answer correctness, citation correctness, refusal when evidence missing.

## Module 4.5 — Agents
Agent hữu ích khi cần nhiều bước, dùng tools, giữ state hoặc quyết định routing. Nhưng không phải task nào cũng cần agent. OpenAI Agents SDK mô tả primitives gồm agents, handoffs/agents-as-tools, guardrails và tracing. [S18]

## Module 4.6 — Evals
Đây là phần bắt buộc nếu muốn đưa AI vào production. Tạo test set, expected behavior, pass/fail rubric, regression run. Đừng đánh giá agent chỉ bằng “tôi thử 3 câu thấy ổn”.

| Loại eval | Ví dụ |
|---|---|
| Grounding | câu trả lời có dùng đúng tài liệu không? |
| Tool correctness | chọn đúng tool/argument không? |
| Schema correctness | JSON đúng schema không? |
| Safety | có từ chối tác vụ cấm/không chắc không? |
| Business KPI | lead classification có tăng conversion không? |
| Cost/latency | chi phí và thời gian mỗi task có chấp nhận được không? |

## Module 4.7 — MCP
MCP là lớp chuẩn hóa cách hệ thống AI kết nối với context và tools bên ngoài. Tài liệu spec 2026 mô tả tool là khả năng server expose để model gọi, ví dụ query database, call API hoặc computation. [S19][S20]

Học ở mức: client/server concept, tool schema, permissions, auth, data exposure, error handling. Chỉ sau đó mới tự viết một MCP server nhỏ.

## Lab 4.2 — Personal operations MCP
Viết MCP server nhỏ exposing 3 tools an toàn: list_projects, get_project_status, create_note. Không cho tool có destructive action. Thêm validation và audit log.

## Project 3 — AI Knowledge + Operations Assistant
Web app cho nhân viên: hỏi tài liệu → RAG; yêu cầu kiểm tra đơn hàng → tool call DB; tạo ticket → tool call; approval → human-in-loop. Có eval set 50 câu và dashboard chất lượng.

## Checkpoint Phase 4
- Bạn giải thích được khi nào dùng prompt, structured output, tool call, RAG, agent.
- Bạn có eval dataset.
- Bạn có cách chống hallucination bằng grounding/validation.
- Bạn có cost budget.
- Bạn có log tool calls.
- Bạn hiểu MCP nhưng không biến mọi thứ thành MCP chỉ vì “trend”.

# PHẦN VII — GIAI ĐOẠN 5: ZALO MINI APP
## Vì sao Mini App là một skill nền tảng chứ không phải một món đồ chơi
Zalo hiện mô tả Mini App là ứng dụng nhẹ chạy bên trong Zalo; tài liệu hiện tại nêu quy trình tài khoản developer, CLI, Open API, phát hành và UI components. [S21][S22][S23][S24]

Tài liệu chính thức hiện cũng cho phép chuyển một web app có sẵn thành Mini App. Đây là lý do học web/app engineering trước rồi mới học platform sẽ tiết kiệm công sức. [S25]

## Module 5.1 — Platform fundamentals
- Developer account/App ID
- project initialization
- ZMP CLI
- app-config.json
- ZaUI
- routing/navigation
- platform constraints
- API/backend integration
- auth token/JWT
- CORS/HTTPS
- testing
- review/publish

Lưu ý cập nhật: Zalo Mini App Studio từ phiên bản 1.14.1 không còn được phát triển và hỗ trợ; tài liệu hiện hướng người dùng sang VS Code + Zalo Mini App Extension. [S28]

## Lab 5.1 — Web → Mini App
Lấy Project 1, tối ưu mobile, chuyển thành Mini App. Kiểm tra root DOM, auth header, CORS, HTTPS, asset/public path. Zalo docs có hướng dẫn riêng về các điểm này. [S25]

## Project 4 — Local Service Mini App
Một dịch vụ địa phương: xem dịch vụ → đặt lịch → tra trạng thái → nhận thông báo → tích điểm/voucher giả lập. Backend dùng chung với web app.

## Checkpoint Phase 5
- Có Mini App chạy thực tế.
- Có backend production/sandbox.
- Hiểu CORS và auth trên platform.
- Có UX đơn giản, nhanh, ít bước.
- Có bản release/testing và tài liệu publish flow. Zalo yêu cầu Mini App được xác thực trước khi gửi xét duyệt và bản được duyệt mới publish được. [S26]

# PHẦN VIII — GIAI ĐOẠN 6: DOCKER + LINUX + DEPLOY + MONITORING + SECURITY
## Mental model
```text
LOCAL
 v
Docker image
 v
Container
 v
Server/cloud
 v
Domain + HTTPS
 v
Logs + Metrics + Alerts
 v
Backup + Rollback
```

Docker đóng gói ứng dụng cùng dependency để chạy nhất quán. Tài liệu Docker hiện có tutorial riêng cho app containerized và cả sandbox cho coding agents. [S14]

## Module 6.1 — Linux
- filesystem/permissions
- process/ports
- ssh
- curl
- grep/sed/awk ở mức đủ dùng
- systemd concept
- logs
- environment variables

## Module 6.2 — Docker
- image vs container
- Dockerfile
- volumes
- networks
- Docker Compose
- multi-stage build
- healthcheck
- resource limits
- secret handling

## Module 6.3 — Deploy
Chọn một cách deploy đơn giản trước: managed app platform hoặc một VPS. Học domain, DNS, HTTPS, env vars, database backup, migrations, rollback. Không học Kubernetes lúc mới bắt đầu.

## Module 6.4 — Observability
Tối thiểu phải có structured logs, request id/correlation id, error logs, health endpoint và vài metrics: request count, error rate, latency, AI cost. Với agent có thể thêm tool-call trace. OpenAI Agents SDK có tracing/observability primitives, nhưng bạn cần hiểu nguyên lý độc lập với vendor. [S18]

## Module 6.5 — Security
- OWASP mindset
- input validation
- authN/authZ
- RBAC
- least privilege
- secrets
- rate limiting
- SQL injection prevention
- XSS/CSRF awareness
- file upload safety
- audit log
- PII minimization
- backup/restore

## Lab 6.1 — Break your own app
Tạo checklist 30 lỗi: secret hard-code, invalid input, missing role check, huge payload, duplicate request, DB connection exhaustion, bad CORS, no timeout, no retry, no backup. Thử phá project và ghi kết quả.

## Checkpoint Phase 6
- Có public URL + HTTPS.
- Có Dockerfile/compose.
- Có database backup và cách restore.
- Có healthcheck/logs.
- Có security checklist.
- Có runbook cho 5 lỗi phổ biến.
- Có rollback plan.

# PHẦN IX — GIAI ĐOẠN 7: BUSINESS ANALYSIS + PRODUCT THINKING + SALES/COMMUNICATION
## Tại sao sinh viên CS phải học phần này
Non-IT client không mua TypeScript. Họ mua thời gian tiết kiệm, doanh thu tăng, lỗi giảm, phản hồi nhanh hơn hoặc trải nghiệm tốt hơn. Người có thể nối business problem với technical solution có nhiều không gian nghề nghiệp hơn người chỉ nhận task code.

## Module 7.1 — Discovery
- Ai là user?
- Quy trình hiện tại là gì?
- Pain point nằm ở đâu?
- Tần suất xảy ra?
- Dữ liệu ở đâu?
- Có hệ thống nào hiện hữu?
- Rủi ro?
- Mục tiêu/KPI?
- Ai duyệt?
- Budget/timeline?

## Module 7.2 — Process mapping
```text
CURRENT
Lead -> Excel -> Nhân viên đọc -> Chat -> Nhập CRM -> Follow-up

FUTURE
Lead -> Webhook -> Validate -> CRM -> AI score -> Sales queue -> Follow-up -> KPI
```

## Module 7.3 — KPI
Ví dụ: time-to-first-response, lead-to-appointment rate, no-show rate, average handling time, automation success rate, AI escalation rate, cost per automated task.

## Module 7.4 — ROI
```text
Giá trị sơ bộ/tháng = (giờ tiết kiệm × chi phí giờ lao động) + giá trị doanh thu tăng thêm - chi phí phần mềm/API - chi phí vận hành
```

Đây chỉ là mô hình ước tính. Không dùng nó để hứa hẹn doanh thu. Mục tiêu là học cách nói chuyện bằng outcome.

## Module 7.5 — Sales/communication
Tập viết một proposal 1 trang: problem, current process, proposed solution, scope, assumptions, timeline, KPI, risks, price range. Tập trình bày demo 5 phút không đọc slide.

## Lab 7.1 — Interview simulation
Đóng vai khách sạn/nhà hàng/trung tâm đào tạo. Bạn chỉ được hỏi câu hỏi khám phá; không được phép đề xuất công nghệ trong 10 phút đầu.

# PHẦN X — GIAI ĐOẠN 8: PORTFOLIO + JOB/CLIENT
## Portfolio architecture
Website cá nhân phải cho nhà tuyển dụng thấy bạn giải quyết vấn đề như một engineer/product builder, không chỉ là gallery.

```text
Home
 ├── About / Positioning
 ├── Projects
 │    ├── Project 01 - Local CRM
 │    ├── Project 02 - Automation
 │    ├── Project 03 - AI Knowledge
 │    ├── Project 04 - Mini App
 │    └── Project 05 - Non-IT Case Study
 ├── Lab Notes
 ├── Architecture
 ├── Resume
 └── Contact
```

## Mỗi project phải có 12 bằng chứng
| # | Evidence |
|---|---|
| 1 | Problem statement |
| 2 | Target user |
| 3 | Current process |
| 4 | Success KPI |
| 5 | Architecture diagram |
| 6 | Database/data model |
| 7 | Key API/workflow |
| 8 | AI/automation decisions |
| 9 | Security considerations |
| 10 | Tests/evals |
| 11 | Deployment/demo |
| 12 | Postmortem + next iteration |

## Project portfolio 4–6 bài
| Project | Ngành / bài toán | Công nghệ | Điểm nhấn |
|---|---|---|---|
| P1 Local Service CRM | dịch vụ địa phương | Next.js, Node, Postgres | full-stack fundamentals |
| P2 Lead Automation | marketing/sales | n8n, APIs, Postgres | workflow + webhook + ROI |
| P3 Knowledge Assistant | dịch vụ nội bộ | LLM, RAG, tools | evals + grounding |
| P4 Zalo Mini App | dịch vụ/du lịch/F&B | Mini App, API, auth | platform + UX |
| P5 AI Ops Assistant | ops/customer service | agent + tools + MCP | agentic workflow + guardrails |
| P6 Case Study local | một doanh nghiệp giả lập hoặc partner thực | tùy bài toán | business/product thinking |

## Job map để tìm tại Đà Nẵng
- AI Automation Engineer / Specialist
- AI Solutions / AI Application Engineer
- Fullstack TypeScript/Next.js
- Integration / Automation Developer
- Business Application Developer
- AI Business Analyst / Technical BA
- Digital Transformation
- Low-code/Workflow Automation
- Product Engineer / Internal Tools

Không tìm việc chỉ bằng keyword “vibe coder”. Các tin hiện có cho thấy công việc tương tự có thể mang nhiều tên khác nhau. [S4][S5][S6]

# PHẦN XI — AI-ASSISTED DEVELOPMENT: VIBE CODING ĐÚNG CÁCH
## AI coding workflow
```text
1. SPEC
2. PLAN
3. SMALL PATCH
4. RUN TEST
5. REVIEW DIFF
6. EXPLAIN
7. COMMIT
8. NEXT TASK
```

Có thể dùng Cursor, Claude Code, Codex, Gemini hoặc công cụ tương đương. Công cụ có thể thay đổi; workflow không nên thay đổi.

## Prompt template
```text
CONTEXT
- repo purpose
- current behavior

TASK
- one clear change

CONSTRAINTS
- files allowed
- do not redesign architecture

ACCEPTANCE CRITERIA
- test cases
- expected output

DELIVER
- patch
- tests
- summary
- risks
```

## Agent guardrails
- Không cho agent tự xóa database.
- Không cho agent đọc/commit secrets.
- Không cho agent thay đổi kiến trúc ngoài scope.
- Mọi destructive command phải human-approved.
- Mọi feature phải có test hoặc manual verification.
- Review diff trước commit.
- Dùng AGENTS.md/project rules để giữ context nhất quán.
- Chia task nhỏ, checkpoint thường xuyên.

## Khi nào không dùng vibe coding
- Khi bạn chưa hiểu problem enough to specify acceptance criteria.
- Khi debugging ở production mà chưa có logs/evidence.
- Khi thay đổi auth/payment/security-critical code mà chưa review.
- Khi code sinh ra nhanh hơn khả năng bạn kiểm tra.
- Khi việc hỏi AI nhiều vòng tốn hơn việc tự viết 20 dòng rõ ràng.

# PHẦN XII — 40 TUẦN THỰC CHIẾN
| Tuần | Trọng tâm | Học | Đầu ra |
|---|---|---|---|
| 1 | Setup | terminal, Git, GitHub | Lab 0.1, 0.2 |
| 2 | JS | variables, types, condition, loops | 20 exercises |
| 3 | JS | functions, arrays, objects | data-processing CLI |
| 4 | JS | reference, mutation, modules, errors | copy/mutation lab |
| 5 | Async | Promise, async/await, fetch | API client |
| 6 | TS | types, unions, narrowing | typed utilities |
| 7 | TS/Git | generics, modules, Git branches | mini package |
| 8 | HTTP | REST, status, JSON, auth basics | REST client + report |
| 9 | Node | runtime, npm/pnpm, server | HTTP server |
| 10 | Node | API routing, validation, errors | CRUD API |
| 11 | Postgres | schema, PK/FK, SQL | ERD + SQL |
| 12 | Postgres | joins, indexes, transaction | query challenge |
| 13 | Backend | auth, roles, migrations | secure API |
| 14 | React | components, props, state | dashboard UI |
| 15 | React | forms, data fetching, errors | CRM screen |
| 16 | Next | routing, layouts, server/client | full-stack app |
| 17 | Next | optimization, metadata, loading | polished P1 |
| 18 | Testing | unit/integration/e2e concepts | test suite |
| 19 | Deploy | first deployment | public demo |
| 20 | Phase 2 gate | demo + README + postmortem | Project 1 complete |
| 21 | n8n | triggers, mapping, expressions | webhook lab |
| 22 | Automation | branches, loops, API nodes | lead workflow |
| 23 | OAuth | tokens, scopes, secrets | OAuth integration |
| 24 | Reliability | retry, idempotency, errors | failure lab |
| 25 | Project 2 | automation + KPI | Project 2 complete |
| 26 | LLM | prompts, model behavior, cost | LLM API lab |
| 27 | Structured output | schema validation | classification service |
| 28 | Tools | function/tool calling | DB tool |
| 29 | RAG | ingest, chunk, retrieval | knowledge assistant |
| 30 | RAG eval | eval set, citations | 30–50 test cases |
| 31 | Agents | state, tool loop, guardrails | simple agent |
| 32 | MCP | tool exposure, auth, permissions | small MCP server |
| 33 | Project 3 | AI operations assistant | Project 3 complete |
| 34 | Mini App | account, CLI, UI | Hello Mini App |
| 35 | Mini App | API/auth/CORS | backend integration |
| 36 | Mini App | UX, release, testing | Project 4 beta |
| 37 | Docker/Linux | container, shell, env | containerize |
| 38 | Deploy/monitor | HTTPS, logs, backup | production-ish deploy |
| 39 | Security/product | threat checklist + discovery | client simulation |
| 40 | Portfolio/job | case studies, CV, demo | portfolio release |

# PHẦN XIII — CHECKPOINT HỆ THỐNG
| Checkpoint | Điều kiện đạt |
|---|---|
| C0 | Bạn biết terminal/Git và tạo được repo sạch. |
| C1 | Bạn viết JS/TS mà không cần AI cho các logic đơn giản. |
| C2 | Bạn hiểu request đi từ UI → API → DB. |
| C3 | Bạn có automation workflow có error path. |
| C4 | Bạn gọi LLM bằng schema/tool thay vì chỉ text generation. |
| C5 | Bạn có RAG + eval set. |
| C6 | Bạn có Mini App chạy và backend integration. |
| C7 | Bạn deploy, log, backup, rollback được. |
| C8 | Bạn có thể nói chuyện bằng problem/KPI, không chỉ technology. |
| C9 | Bạn có 4–6 case studies và một portfolio site. |

# PHẦN XIV — THỨ TỰ ƯU TIÊN KHI THỜI GIAN THIẾU
| Ưu tiên | Giữ | Cắt/hoãn |
|---|---|---|
| P0 | JS/TS, Git, HTTP, SQL, API | framework phụ |
| P1 | Node/Next/Postgres, n8n, LLM app | nhiều cloud |
| P2 | Security, testing, observability | Kubernetes |
| P3 | MCP + agents | multi-agent phức tạp |
| P4 | Zalo Mini App | các platform mini app khác |
| P5 | Business discovery + portfolio | học tool chỉ để “có trong CV” |

# PHẦN XV — NHỮNG THỨ KHÔNG CẦN HỌC NGAY
- Kubernetes sâu
- microservices phức tạp
- fine-tuning LLM
- deep ML math nếu mục tiêu là AI application/automation
- quá nhiều frontend framework
- quá nhiều automation platform
- xây distributed system 10 service
- 100 công cụ AI
- chạy theo benchmark mỗi tuần

Những phần này không vô ích; chỉ là ROI thấp ở giai đoạn bạn cần khả năng ship sản phẩm và kiếm việc.

# PHẦN XVI — 6 MÔ HÌNH DỰ ÁN ĐỂ LUYỆN TƯ DUY NON-IT ĐÀ NẴNG
| Ngữ cảnh | Bài toán | Stack | KPI gợi ý |
|---|---|---|---|
| Khách sạn/du lịch | đặt lịch, FAQ, lead follow-up | Mini App + n8n + AI + CRM | booking/response time |
| F&B | order, loyalty, voucher | Mini App + database + automation | repeat purchase |
| Trung tâm giáo dục | lead → tư vấn → enrollment | webhook + CRM + AI classification | response time/conversion |
| Bất động sản | lead routing + document assistant | AI + workflow + CRM | lead handling time |
| Dịch vụ sức khỏe | appointment + FAQ + reminders | Mini App + workflow + access control | no-show rate |
| Doanh nghiệp nội bộ | knowledge + ticket + approval | RAG + tools + human-in-loop | handling time |

Đây là mô hình để luyện, không phải tuyên bố rằng mọi doanh nghiệp trong các ngành trên đều cần cùng một sản phẩm.

# PHẦN XVII — CÁCH ĐỌC MỘT JD VÀ BIẾN JD THÀNH KẾ HOẠCH HỌC
```text
JD có REST API + DB + n8n + RAG + Agent + security
          v
Skill map
          v
JS/TS -> API -> DB -> Automation -> AI app -> Security
          v
Project proof
          v
Interview stories
```

Mỗi tuần lấy 3–5 JD thật tại Đà Nẵng. Không copy checklist. Nhóm yêu cầu thành: core engineering, AI/automation, domain, communication. Sau đó chọn 1 gap lớn nhất để lấp bằng một lab hoặc một commit.

# PHẦN XVIII — BỘ CHECKLIST PORTFOLIO
- Homepage trả lời trong 5 giây: bạn là ai, giải quyết vấn đề gì, stack gì.
- Mỗi project có demo URL hoặc video.
- Mỗi project có “Problem / Solution / Architecture / Trade-offs / Results / Lessons”.
- GitHub repo sạch, commit có ý nghĩa, README rõ.
- Không lộ secret/API key.
- Có test và eval evidence.
- Có architecture diagram.
- Có screenshots mobile + desktop khi relevant.
- Có 1 trang “AI-assisted development” mô tả cách bạn dùng agent mà vẫn kiểm chứng.
- Có CV 1 trang và phiên bản ATS-friendly.
- LinkedIn headline tập trung vào capability, không ghi “Vibe Coder” như danh xưng duy nhất.
- Có 2–3 case studies trình bày bằng ngôn ngữ business.
- Có video demo 2–5 phút/project.
- Có English README cho project nổi bật.

# PHẦN XIX — HỒ SƠ ĐI LÀM TỐI THIỂU
| Tài sản | Tối thiểu | Tốt |
|---|---|---|
| GitHub | 4 repo sạch | 6 repo + contribution graph + releases |
| Portfolio | 1 site | 1 site + 4–6 case studies |
| CV | 1 trang | 1 trang + tailored version theo JD |
| Demo | 2 project live | 4 project live hoặc video |
| AI evidence | 1 LLM app | RAG + tools + eval + agent/MCP |
| Automation | 1 n8n workflow | 2–3 workflow có reliability |
| Mini App | 1 prototype | 1 project release/testing |
| English | đọc docs cơ bản | đọc JD/docs và trình bày project 3–5 phút |

# PHẦN XX — CÁCH BIẾN KỸ NĂNG THÀNH CƠ HỘI KIẾM TIỀN
Không giả định rằng freelancing sẽ thành công ngay. Hãy xem nó như một bài tập discovery và delivery.

- Giai đoạn 1: xây demo cho ngành giả lập.
- Giai đoạn 2: tìm một quy trình thật đơn giản từ bạn bè/người quen/doanh nghiệp địa phương.
- Giai đoạn 3: làm audit 1–2 giờ: current process, bottleneck, data, quick win.
- Giai đoạn 4: đề xuất PoC nhỏ có KPI và giới hạn scope.
- Giai đoạn 5: đo trước/sau và biến thành case study.
- Giai đoạn 6: chuẩn hóa solution template để tái sử dụng.

Đừng bán “AI agent”. Bán outcome có thể kiểm chứng: giảm thao tác lặp, giảm thời gian phản hồi, chuẩn hóa quy trình, tự động phân loại, tra cứu nội bộ, hoặc giảm lỗi nhập liệu.

# PHẦN XXI — ROADMAP SAU KHI ĐÃ CÓ VIỆC
Sau khi đã có nền tảng, lựa chọn một nhánh chuyên sâu thay vì học tất cả.

| Nhánh | Nên đào sâu |
|---|---|
| AI Automation Engineer | workflow architecture, event-driven systems, queues, evals, cost, reliability |
| AI Product Engineer | Next.js, product analytics, AI UX, experimentation, full-stack |
| AI Solutions / Technical BA | discovery, process mining, requirements, ROI, proposal, architecture |
| Mini App / Platform Engineer | Zalo ecosystem, auth, payments, notifications, platform constraints |
| AI Agent Engineer | tool ecosystems, MCP, multi-agent orchestration, tracing/evals, guardrails |
| Internal Tools Engineer | ERP/CRM integrations, RPA/automation, reporting, permissions |

# PHẦN XXII — GLOSSARY CHO NGƯỜI MỚI
| Thuật ngữ | Nghĩ đơn giản |
|---|---|
| API | cổng để phần mềm này nói chuyện với phần mềm khác |
| REST | kiểu thiết kế API phổ biến dựa trên HTTP |
| Webhook | một hệ thống chủ động gửi sự kiện sang hệ thống khác |
| OAuth | cách cấp quyền truy cập thay vì đưa password cho app |
| Database | nơi lưu dữ liệu có cấu trúc |
| ORM | lớp giúp code thao tác DB theo object/model |
| LLM | mô hình ngôn ngữ sinh/biến đổi ngôn ngữ |
| Structured output | output theo schema để phần mềm kiểm tra |
| Tool calling | model yêu cầu hệ thống gọi một hàm/tool |
| RAG | lấy dữ liệu liên quan rồi đưa vào context cho model |
| Agent | hệ thống AI có thể lập kế hoạch/quyết định và dùng tool để hoàn thành task |
| MCP | chuẩn để kết nối model/agent với context và tools |
| Automation | biến một chuỗi thao tác thành workflow chạy tự động |
| Observability | khả năng biết hệ thống đang làm gì qua logs/metrics/traces |
| Idempotency | gửi cùng một request nhiều lần nhưng kết quả không bị nhân bản sai |
| CI/CD | tự động kiểm tra, build, deploy theo pipeline |
| MVP | phiên bản nhỏ nhất để kiểm chứng giả thuyết |
| KPI | chỉ số đo mục tiêu |
| ROI | giá trị thu được so với chi phí bỏ ra |

# PHẦN XXIII — TÀI NGUYÊN CHÍNH THỨC
Ưu tiên đọc tài liệu chính thức và changelog trước tutorial cộng đồng khi API/tool thay đổi.

- [S1] Đà Nẵng - Kế hoạch chuyển đổi số năm 2026: https://thanhtra.danang.gov.vn/chi-tiet-tin/group/168/nid/5500/da-nang-cong-bo-ke-hoach-chuyen-doi-so-nam-2026-voi-chu-de-ai-vi-nguoi-dan
- [S2] Đà Nẵng mở rộng hợp tác với Hàn Quốc, hướng tới Thành phố AI: https://danang.gov.vn/vi/web/dng/w/da-nang-mo-rong-hop-tac-voi-han-quoc-huong-toi-thanh-pho-ai
- [S3] Đà Nẵng - nguồn nhân lực CNTT 2026-2030: https://banthach.danang.gov.vn/chuyen-doi-so/cung-cap-thong-tin-danh-gia-hien-trang-nguon-nhan-luc-cntt-va-de-xuat-giai-phap-phat-trien-nhan-luc-cntt-tren-dia-ban-thanh-pho-da-nang-giai-doan-2026-2030
- [S4] Go Media - AI Automation & Tech-Marketing tại Đà Nẵng: https://www.topcv.vn/viec-lam/chuyen-vien-ai-automation-tech-marketing/2159699.html
- [S5] pTrackly - Fullstack TypeScript/Next.js, Compliance Automation tại Đà Nẵng: https://vn.linkedin.com/jobs/view/fullstack-engineer-typescript-next-js-%E2%80%93-compliance-automation-startup-at-ptrackly-4328504110
- [S6] KMS Technology - Generative AI Automation Lead tại Đà Nẵng: https://vn.linkedin.com/jobs/view/generative-ai-automation-lead-generative-ai-ai-agents-for-test-automation-based-in-da-nang-at-kms-technology-inc-4449537127
- [S7] Stack Overflow Developer Survey 2025 - AI: https://survey.stackoverflow.co/2025/ai
- [S8] Stack Overflow Developer Survey 2025 - Technology: https://survey.stackoverflow.co/2025/technology
- [S9] Node.js Releases: https://nodejs.org/en/about/previous-releases
- [S10] TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro
- [S11] React Learn: https://react.dev/learn
- [S12] Next.js Docs: https://nextjs.org/docs
- [S13] PostgreSQL Documentation: https://www.postgresql.org/docs/
- [S14] Docker Get Started: https://docs.docker.com/get-started/
- [S15] OpenAI Function Calling: https://developers.openai.com/api/docs/guides/function-calling
- [S16] OpenAI Structured Outputs: https://developers.openai.com/api/docs/guides/structured-outputs
- [S17] OpenAI Tools: https://developers.openai.com/api/docs/guides/tools
- [S18] OpenAI Agents SDK: https://openai.github.io/openai-agents-python/
- [S19] Model Context Protocol - Architecture: https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture
- [S20] Model Context Protocol - Tools: https://modelcontextprotocol.io/specification/2026-07-28/server/tools
- [S21] Zalo Mini App - Overview: https://docs.zaloplatforms.com/mini-app-platform
- [S22] Zalo Mini App - Developer Account: https://docs.zaloplatforms.com/docs/MA/intro/intro/mini-app-account
- [S23] Zalo Mini App - CLI: https://docs.zaloplatforms.com/docs/MA/intro/getting-started/dev-use-command-line
- [S24] Zalo Mini App - Open API: https://docs.zaloplatforms.com/docs/MA/openApis/intro
- [S25] Zalo Mini App - Convert Web App: https://docs.zaloplatforms.com/docs/MA/intro/getting-started/convert-web-app-to-mini-app
- [S26] Zalo Mini App - Release: https://docs.zaloplatforms.com/docs/MA/intro/public-mini-program
- [S27] Zalo Mini App - Design Guidelines: https://docs.zaloplatforms.com/docs/MA/intro/zalo-mini-program-design-guidelines
- [S28] Zalo Mini App - ZaUI: https://docs.zaloplatforms.com/docs/MA/zaui
- [S29] World Economic Forum - Future of Jobs 2025: https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/
# PHẦN XXIV — QUY TẮC 12 THÁNG
- Bạn không cần biết mọi công nghệ. Bạn cần biết cách học một công nghệ mới nhanh.
- Bạn không cần là “prompt engineer”. Bạn cần là engineer có AI leverage.
- Bạn không cần xây hệ thống thật to. Bạn cần xây hệ thống có giá trị và chứng minh được.
- Bạn không cần chạy theo dự báo 5–7 năm như một lời hứa. Hãy giữ nền tảng ổn định và kiểm tra thị trường/JD mỗi 4–6 tuần.
- Bạn không cần chờ “giỏi rồi mới portfolio”. Portfolio chính là công cụ để học.
- Mỗi project kết thúc bằng một bài postmortem: điều gì đúng, điều gì sai, lần sau sửa gì.

# PHỤ LỤC A — LỊCH HỌC TUẦN MẪU 15 GIỜ
| Thời lượng | Hoạt động |
|---|---|
| 4h | Học khái niệm + docs |
| 6h | Build lab/project |
| 2h | Debug + testing |
| 1h | Git/README/notes |
| 1h | English technical reading |
| 1h | Review JD / market / retrospective |

Một buổi học chuẩn: 15 phút ôn lại → 30 phút đọc/xem → 60 phút code → 15 phút giải thích lại bằng lời → commit.

# PHỤ LỤC B — DEFINITION OF DONE CHO MỖI TASK
- Code chạy đúng.
- Có test hoặc manual verification phù hợp.
- Không có secret hard-code.
- Error path đã được xem xét.
- Bạn giải thích được code chính.
- Git diff chỉ chứa phần cần thiết.
- README/notes được cập nhật nếu behavior thay đổi.
- Commit message mô tả đúng thay đổi.

# PHỤ LỤC C — 10 CÂU TỰ KIỂM TRA TRƯỚC KHI NHẬN TASK
1. Input là gì?

2. Output là gì?

3. Ai dùng?

4. Nguồn dữ liệu ở đâu?

5. Side effect nào xảy ra?

6. Có lỗi nào?

7. Retry có an toàn không?

8. Có dữ liệu nhạy cảm không?

9. Đo thành công bằng KPI nào?

10. Tôi biết mình đã done khi nào?

# KẾT LUẬN
Đích đến của giáo trình không phải biến bạn thành người biết thật nhiều tool. Đích đến là một profile có thể đứng giữa business và engineering: hiểu vấn đề, thiết kế quy trình, dùng AI để tăng tốc, viết đủ code để kiểm soát hệ thống, tích hợp API/DB, tự động hóa, xây Mini App, triển khai an toàn, đo kết quả và biến toàn bộ quá trình thành portfolio.

Khi đã đến Phase 8, bạn nên có bằng chứng chứ không chỉ có danh sách kỹ năng: 4–6 case studies, repo sạch, demo, test/eval, architecture, deployment và câu chuyện business. Đó là “vốn nghề nghiệp” mà bạn mang theo khi tìm cơ hội tại Đà Nẵng hoặc làm remote.
