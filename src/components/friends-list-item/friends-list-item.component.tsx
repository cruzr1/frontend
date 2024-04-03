type FriendsListItemProps = {
  name: string;
  location: string;
  trainType: string[];
  isReadyTrain: boolean;
  isTrainer: boolean;
}

export default function FriendsListItemComponent({name, location, trainType, isReadyTrain, isTrainer}: FriendsListItemProps): JSX.Element {
  const readyToTrainCaption = isReadyTrain ? 'Готов к тренировке' : 'Не готов к тренировке';
  const requestApplicationCaption = isTrainer ? 'Запрос на персональную тренировку' : 'Запрос насовместную тренировку';
  return (
      <div className="thumbnail-friend">
        <div className="thumbnail-friend__info thumbnail-friend__info--theme-light">
          <div className="thumbnail-friend__image-status">
            <div className="thumbnail-friend__image">
              <picture>
                <source type="image/webp" srcSet="img/content/thumbnails/friend-14.webp, img/content/thumbnails/friend-14@2x.webp 2x" /><img src="img/content/thumbnails/friend-14.jpg" srcSet="img/content/thumbnails/friend-14@2x.jpg 2x" width="78" height="78" alt="" />
              </picture>
              <div className="thumbnail-friend__online-status thumbnail-friend__online-status--is-online"></div>
            </div>
          </div>
          <div className="thumbnail-friend__header">
            <h2 className="thumbnail-friend__name">{name}</h2>
            <div className="thumbnail-friend__location">
              <svg width="14" height="16" aria-hidden="true">
                <use xlinkHref="#icon-location"></use>
              </svg>
              <address className="thumbnail-friend__location-address">{location}</address>
            </div>
          </div>
          <ul className="thumbnail-friend__training-types-list">
            {trainType.map((type) =>
              <li key={type}>
                <div className="hashtag thumbnail-friend__hashtag"><span>#{type}</span></div>
              </li>
            )}
          </ul>
          <div className="thumbnail-friend__activity-bar">
            <div className={`thumbnail-friend__ready-status ${isReadyTrain ? 'thumbnail-friend__ready-status--is-ready' : 'thumbnail-friend__ready-status--is-not-ready'}`}><span>{readyToTrainCaption}</span>
            </div>
            {!isTrainer && isReadyTrain && <button className="thumbnail-friend__invite-button" type="button">
              <svg width="43" height="46" aria-hidden="true" focusable="false">
                <use xlinkHref="#icon-invite"></use>
              </svg><span className="visually-hidden">Пригласить друга на совместную тренировку</span>
            </button>}
          </div>
        </div>
        {isReadyTrain && <div className="thumbnail-friend__request-status thumbnail-friend__request-status--role-user">
          <p className="thumbnail-friend__request-text">{requestApplicationCaption}</p>
          <div className="thumbnail-friend__button-wrapper">
            <button className="btn btn--medium btn--dark-bg thumbnail-friend__button" type="button">Принять</button>
            <button className="btn btn--medium btn--outlined btn--dark-bg thumbnail-friend__button" type="button">Отклонить</button>
          </div>
        </div>}
      </div>
  )
}