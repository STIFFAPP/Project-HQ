export const CATEGORIES = [
  "Personal",
  "Business",
  "Hobby",
  "KB Garage",
  "Eden GMC",
  "Life",
  "Other",
];

export const TIME_BUCKETS = [
  { id: "today", label: "Today" },
  { id: "this_week", label: "This Week" },
  { id: "next_month", label: "Next Month" },
  { id: "backlog", label: "Backlog" },
];

export const seedProjects = [
  {
    id: "kb-garage",
    name: "KB Garage — First Build Video",
    category: "KB Garage",
    status: "Active",
    priority_position: 1,
    progress: 30,
    description: "Build the first repeatable KB Garage project + content workflow.",
    notion_url: "",
    content_type: "YouTube Video",
  },
  {
    id: "eden-site",
    name: "Eden GMC Website",
    category: "Eden GMC",
    status: "Active",
    priority_position: 2,
    progress: 60,
    description: "Website improvements and lead-generation tasks.",
    notion_url: "",
    content_type: null,
  },
  {
    id: "dd-wheel",
    name: "Direct-Drive Wheel",
    category: "Hobby",
    status: "Planned",
    priority_position: 3,
    progress: 10,
    description: "Direct-drive steering wheel build.",
    notion_url: "",
    content_type: null,
  },
];

export const seedTasks = [
  {
    id: "task-1",
    title: "Plan KB Garage first video",
    project_id: "kb-garage",
    time_bucket: "today",
    position: 1,
    completed: false,
  },
  {
    id: "task-2",
    title: "Fix Eden GMC contact flow",
    project_id: "eden-site",
    time_bucket: "this_week",
    position: 1,
    completed: false,
  },
  {
    id: "task-3",
    title: "Research motor controller",
    project_id: "dd-wheel",
    time_bucket: "next_month",
    position: 1,
    completed: false,
  },
];

export const seedPurchases = [
  {
    id: "purchase-1",
    project_id: "kb-garage",
    name: "Camera microphone",
    status: "need",
    blocking: true,
    position: 1,
  },
  {
    id: "purchase-2",
    project_id: "kb-garage",
    name: "Tripod / camera mount",
    status: "need",
    blocking: false,
    position: 2,
  },
  {
    id: "purchase-3",
    project_id: "dd-wheel",
    name: "Motor controller",
    status: "need",
    blocking: true,
    position: 1,
  },
  {
    id: "purchase-4",
    project_id: "dd-wheel",
    name: "48V PSU",
    status: "need",
    blocking: true,
    position: 2,
  },
];

export const seedIdeas = [
  {
    id: "idea-1",
    title: "Create a permanent KB Garage filming corner",
    category: "KB Garage",
  },
  {
    id: "idea-2",
    title: "Eden GMC before/after video series",
    category: "Eden GMC",
  },
];
