import Modal from "react-modal"
import { StateLabelGroup } from "../LabelGroup/StateLabelGroup"
import { CloseButton } from "components/UI/atom/button/CloseButton"
import { MyScrollbar } from "../Scrollbar"
import "./style.css"

export const HistoryModal = (props) => {
    const closeModal = () => {
        props.toggleModal(false)
    }

    const header = { title: "FIGHT HISTORY", text: "7 DAYS" }
    const contents = [
        {
            id: "ID",
            id_value: "535 (14/01) 22:53",
            status: "LOSE",
            status_value: "0 DVERSE",
        },
        {
            id: "ID",
            id_value: "424 (14/01) 22:54",
            status: "WIN",
            status_value: "4 DVERSE",
        },
    ]

    const customStyles = {
        content: {
            border: 'solid 3px #fff',
            borderRadius: '20px',
            backgroundColor: 'rgb(0, 0, 0, 0.85)',
            backgroundImage: '-moz - linear - gradient(90deg, rgb(0, 0, 0) 0 %, rgb(1, 39, 97) 100 %)',
            backgroundImage: '-webkit - linear - gradient(90deg, rgb(0, 0, 0) 0 %, rgb(1, 39, 97) 100 %)',
            backgroundImage: '-ms - linear - gradient(90deg, rgb(0, 0, 0) 0 %, rgb(1, 39, 97) 100 %)',
            left: '40px',
            top: '120px',
            maxWidth: '350px',
            maxHeight: '600px',
            overflow: 'visible',
        },
    }

    return (
        <Modal
            isOpen={props.isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => closeModal()}
            style={customStyles}
            ariaHideApp={false}
        >
            <CloseButton onClick={closeModal} />
            <StateLabelGroup
                title={header.title}
                titleColor="#00fffc"
                count={header.text}
                className="history-modal-header"
            />
            <MyScrollbar>
                {contents.map(content => (
                    <div className="item">
                        <StateLabelGroup
                            title={content.id}
                            count={content.id_value}
                        />
                        <StateLabelGroup
                            title={content.status}
                            count={content.status_value}
                            titleColor={content.status === "LOSE" ? "#6a0d0d" : "#24ff00"}
                        />
                    </div>
                ))}
            </MyScrollbar>
        </Modal>
    )
}