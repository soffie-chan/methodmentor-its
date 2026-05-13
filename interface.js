export class Question {

  constructor(
    question_id,
    prompt,
    choices,
    topic,
    answer,
    skill,
    difficulty,
    discrimination,
    type,
    guess
  ) {
    this.question_id = question_id;
    this.prompt = prompt;
    this.choices = choices;
    this.topic = topic;
    this.type = type;
    this.answer = answer;
    this.skill = skill;
    this.difficulty = difficulty;
    this.discrimination = discrimination;
    this.guess = guess;
  }
}