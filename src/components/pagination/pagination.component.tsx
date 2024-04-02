export default function PaginationComponent(): JSX.Element {
  return (
    <div className="show-more training-catalog__show-more">
    <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
    <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
  </div>
  )
}
