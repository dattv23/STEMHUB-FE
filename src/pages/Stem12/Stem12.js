import { memo, useState } from 'react';
import tinycolor from 'tinycolor2';
import classNames from 'classnames/bind';
import styles from './Stem12.module.scss';
import Topic from '~/components/Layouts/Components/Topic';

// Services
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTopicAsync } from '~/app/slices/topicSlice';
import * as stemServices from '~/services/stemServices';

//Clear fetch
const controller = new AbortController();

const cx = classNames.bind(styles);

function Stem12() {
    const dispatch = useDispatch();
    const [listStem12, setListStem12] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await dispatch(getTopicAsync()).unwrap();
                if (res) {
                    const stemNamePromises = res.map(async (topic) => {
                        const stem = await stemServices.getStemById(topic.stemId);
                        if (!stem) return;
                        return {
                            stemId: stem.stemId,
                            stemName: stem?.stemName,
                            ...topic,
                        };
                    });

                    const stemNameResults = await Promise.all(stemNamePromises);
                    if (stemNameResults) {
                        const stem12Regex = /^stem\s*12$/i;

                        const stem12s = stemNameResults.filter((stem) => {
                            return stem12Regex.test(stem.stemName);
                        });

                        if (stem12s) {
                            setListStem12(stem12s);
                        }
                    }
                }
            } catch (rejectedValueOrSerializedError) {
                console.error(rejectedValueOrSerializedError);
            }
        };
        fetchApi();

        return () => {
            controller.abort();
        };
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('grid-row', { content: 'content' })}>
                    {listStem12?.map((shine) => {
                        const randomColor = tinycolor.random().toString();
                        return (
                            <div key={shine.topicId} className={cx('grid-column-3')}>
                                <Topic colorCode={randomColor} shine={shine} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default memo(Stem12);
