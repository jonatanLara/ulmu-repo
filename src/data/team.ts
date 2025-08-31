// src/data/team.ts
export type Member = {
  name: string;
  username: string;
  avatarUrl: string;
  githubUrl: string;
};

const members: Member[] = [
  {
    name: "Jonatan Lara",
    username: "jonatanLara",
    avatarUrl: "https://avatars.githubusercontent.com/u/5728020?v=4",
    githubUrl: "https://github.com/jonatanLara",
  },
  {
    name: "Juan José",
    username: "juanjose1930",
    avatarUrl: "https://avatars.githubusercontent.com/u/117763193?v=4",
    githubUrl: "https://github.com/juanjose1930",
  },
  {
    name: "Carlos Pérez",
    username: "carlosperezse",
    avatarUrl: "https://avatars.githubusercontent.com/u/73508867?v=4",
    githubUrl: "https://github.com/carlosperezse",
  },
  {
    name: "David Quime",
    username: "dquime02",
    avatarUrl: "https://avatars.githubusercontent.com/u/211899468?v=4",
    githubUrl: "https://github.com/dquime02",
  },
  {
    name: "Jose Villanueva",
    username: "joselsvp",
    avatarUrl: "https://avatars.githubusercontent.com/u/54222990?v=4",
    githubUrl: "https://github.com/joselsvp",
  },
  {
    name: "Paulina S.",
    username: "PaulinaS4",
    avatarUrl: "https://avatars.githubusercontent.com/u/129533685?v=4",
    githubUrl: "https://github.com/joselsvp",
  },
];

export default members;
