/* <Col sm={3}>
                    <nav className="stickyToC" >
                        <h1>Unit List</h1>
                        <ul>
                            {docs && docs.filter(d => d.completed === true).map((doc) => (
                                <motion.li key={doc.placement}>
                                    <a 
                                        style={{textDecoration: "none", overflowY: 'scroll'}} 
                                        href={`#${doc.placement}`}
                                        onClick={() => {setSel(doc)}} 
                                    >
                                            {doc.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </Col> */
                /* <Col>
                {docs && docs.filter(d => d.completed === true).map((doc, index) => (
                    
                    <div key = {index}>
                        {index % 2 === 0 ? 
                        <Row style={{marginTop: "1rem", backgroundColor: `${doc.bg}`, borderRadius: "25px", paddingBottom: "1rem"}}key={doc.placement}>
                            <Col md="auto" >{doc.url && <motion.img 
                                className="unitImage" 
                                style={{width: "auto", borderRadius: "25px"}}
                                src={doc.url} 
                                alt="uploaded pic"
                                whileHover={{scale: 1.05}}/>}</Col>
                            <Col>
                                <Row>
                                    <h4 style={{marginTop: "1rem"}}id={doc.placement}><Badge bg="secondary">{doc.name}</Badge></h4>
                                <Col>
                                    <UnitStats doc={doc}/>
                                </Col>
                                <Col>
                                    <Artifact doc={doc}/>
                                </Col>
                                </Row>
                            </Col>
                        </Row> 
                        : 
                        <Row style={{marginTop: "1rem", backgroundColor: `${doc.bg}`, borderRadius: "25px", paddingBottom: "1rem"}} key={doc.placement}>
                            <Col>
                                <Row>
                                    <h4 style={{marginTop: "1rem"}} id={doc.placement}><Badge bg="secondary">{doc.name}</Badge></h4>
                                <Col>
                                    <Artifact doc={doc}/>
                                </Col>
                                <Col>
                                    <UnitStats doc={doc}/>
                                </Col>
                                </Row>
                            </Col>
                            <Col md="auto">{doc.url && <motion.img 
                            className="unitImage" 
                            style={{width: "auto", height: "auto", borderRadius: "25px"}}
                            src={doc.url} 
                            alt="uploaded pic"
                            whileHover={{scale: 1.05}}/>}</Col>
                        </Row>
                        }
                    </div>
                ))}
                </Col> */