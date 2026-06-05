import { faLink, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ChatRoom({ selectedUser }) {


  return (
    <>
    
      <div className="chatlist-box-outer chatnew">
        {/* Header */}
        <div className="chatlist-header p-3 border-bottom light-border-bottom">
          <div className="d-flex align-items-center gap-2">
            <img src={selectedUser?.image} className="rounded-circle object-fit-cover" width="40" height="40" alt="chat-img" />
            <div className="chat-head-box">
              <h4 className="m-0 fs-5 text-capitalize fw-semibold head-text">
                {selectedUser?.name}
              </h4>
              <span className="text-capitalize para-text fs-8 m-0">
                {selectedUser?.status || selectedUser?.members}
              </span>
            </div>
          </div>
        </div>
        {/* Chat Body */}
        <div className="chatlist-body pt-4">
          <div data-id="primepanel-chat" className="px-3">
            <div className="message-out">
              <div className="message-content">
                <p>Hi! Yes, I've gone through it. It looks solid overall, but I have a few minor suggestions we can discuss.</p>
                <span className="fs-9 fw-semibold">29 Dec 10:17am</span>
              </div>
            </div>
            <div className="message-in">
              <div className="message-content">
                <p>That’s great! Let me know when you’re free to discuss. We can finalize everything today.</p>
                <span className="fs-9 fw-semibold">29 Dec 10:20am</span>
              </div>
            </div>
            <div className="message-out">
              <div className="message-content">
                <p>I'm free after lunch, around 2:00 PM. Does that work for you?</p>
                <span className="fs-9 fw-semibold">29 Dec 10:22am</span>
              </div>
            </div>
            <div className="message-in">
              <div className="message-content">
                <p>2:00 PM works perfectly. I'll call you then. Thanks!</p>
                <span className="fs-9 fw-semibold">29 Dec 10:25am</span>
              </div>
            </div>
            <div className="message-out">
              <div className="message-content">
                <p>Awesome. Looking forward to it. Talk soon!</p>
                <span className="fs-9 fw-semibold">29 Dec 10:26am</span>
              </div>
            </div>
            <div className="message-in">
              <div className="message-content">
                <p>Sure thing! Have a good morning until then.</p>
                <span className="fs-9 fw-semibold">29 Dec 10:28am</span>
              </div>
            </div>
            <div className="message-out">
              <div className="message-content">
                <p>Hi! Yes, I've gone through it. It looks solid overall, but I have a few minor suggestions we can discuss.</p>
                <span className="fs-9 fw-semibold">29 Dec 10:17am</span>
              </div>
            </div>
            <div className="message-in">
              <div className="message-content">
                <p>That’s great! Let me know when you’re free to discuss. We can finalize everything today.</p>
                <span className="fs-9 fw-semibold">29 Dec 10:20am</span>
              </div>
            </div>
            <div className="message-out">
              <div className="message-content">
                <p>I'm free after lunch, around 2:00 PM. Does that work for you?</p>
                <span className="fs-9 fw-semibold">29 Dec 10:22am</span>
              </div>
            </div>
            <div className="message-in">
              <div className="message-content">
                <p>2:00 PM works perfectly. I'll call you then. Thanks!</p>
                <span className="fs-9 fw-semibold">29 Dec 10:25am</span>
              </div>
            </div>
            <div className="message-out">
              <div className="message-content">
                <p>Awesome. Looking forward to it. Talk soon!</p>
                <span className="fs-9 fw-semibold">29 Dec 10:26am</span>
              </div>
            </div>
          </div>
        </div>
        <div className="chatlist-text px-3 py-2">
          <form>
            <div className="input-group">
              <input type="text" className="form-control input-text input-bg shadow-none" placeholder="Type Something" aria-label="Recipient's username with two button addons" />
              <button className="btn btn-outline-secondary " type="button" >
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className="btn btn-outline-secondary " type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}

export default ChatRoom;