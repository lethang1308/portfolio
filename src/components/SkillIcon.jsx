import { CodeXml } from 'lucide-react';
import reactLogo from 'devicon/icons/react/react-original.svg';
import angularLogo from 'devicon/icons/angularjs/angularjs-plain.svg';
import typescriptLogo from 'devicon/icons/typescript/typescript-plain.svg';
import tailwindLogo from 'devicon/icons/tailwindcss/tailwindcss-original.svg';
import laravelLogo from 'devicon/icons/laravel/laravel-original.svg';
import phpLogo from 'devicon/icons/php/php-plain.svg';
import nodeLogo from 'devicon/icons/nodejs/nodejs-plain.svg';
import mysqlLogo from 'devicon/icons/mysql/mysql-original.svg';
import redisLogo from 'devicon/icons/redis/redis-plain.svg';
import dockerLogo from 'devicon/icons/docker/docker-plain.svg';
import gitLogo from 'devicon/icons/git/git-plain.svg';
import kafkaLogo from 'devicon/icons/apachekafka/apachekafka-original.svg';
import awsLogo from 'devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg';
import graphqlLogo from 'devicon/icons/graphql/graphql-plain.svg';
import vueLogo from 'devicon/icons/vuejs/vuejs-plain.svg';
import postgresqlLogo from 'devicon/icons/postgresql/postgresql-plain.svg';
import javascriptLogo from 'devicon/icons/javascript/javascript-plain.svg';
import htmlLogo from 'devicon/icons/html5/html5-plain.svg';
import cssLogo from 'devicon/icons/css3/css3-plain.svg';
import bootstrapLogo from 'devicon/icons/bootstrap/bootstrap-plain.svg';
import ionicLogo from 'devicon/icons/ionic/ionic-original.svg';
import githubLogo from 'devicon/icons/github/github-original.svg';
import linuxLogo from 'devicon/icons/linux/linux-plain.svg';
import nginxLogo from 'devicon/icons/nginx/nginx-original.svg';
import postmanLogo from 'devicon/icons/postman/postman-plain.svg';

const icons = {
  React: reactLogo,
  Angular: angularLogo,
  TypeScript: typescriptLogo,
  'Tailwind CSS': tailwindLogo,
  Laravel: laravelLogo,
  PHP: phpLogo,
  'Node.js': nodeLogo,
  MySQL: mysqlLogo,
  Redis: redisLogo,
  Docker: dockerLogo,
  Git: gitLogo,
  Kafka: kafkaLogo,
  AWS: awsLogo,
  GraphQL: graphqlLogo,
  'Vue.js': vueLogo,
  PostgreSQL: postgresqlLogo,
  JavaScript: javascriptLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  Bootstrap: bootstrapLogo,
  Ionic: ionicLogo,
  GitHub: githubLogo,
  Linux: linuxLogo,
  Nginx: nginxLogo,
  Postman: postmanLogo,
};

export default function SkillIcon({ name, className = 'w-8 h-8' }) {
  const icon = icons[name];

  if (!icon) {
    return <CodeXml className={`${className} text-blue-600`} strokeWidth={2} aria-label={name} />;
  }

  return <img src={icon} alt={`${name} logo`} className={`${className} object-contain`} />;
}
