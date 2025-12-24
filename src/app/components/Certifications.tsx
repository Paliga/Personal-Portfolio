'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// Style object for the modal box
const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'rgb(24 24 27)', // zinc-900
  border: '1px solid rgb(63 63 70)', // zinc-700
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflow: 'auto',
};

export default function Certifications() {
  // State to control modal open/close
  const [open, setOpen] = useState(false);
  
  // Functions to open and close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <motion.section
      id="certifications"
      className="lg:col-start-5 lg:col-end-7 lg:row-start-5 lg:row-end-7 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500"
      whileHover={{ scale: 1.02 }}
    >
        <div className="container">
            <h2 className="text-lg font-bold mb-1">Licenses & certifications</h2>
            <p className="text-xs uppercase tracking-wide text-zinc-500 mb-1">Recent</p>
            <ul className="list-inside space-y-3 text-xs text-left mb-4">
              <li>
                <a href="https://media.licdn.com/dms/document/media/v2/D4D2DAQHnNwkzZehQMA/profile-treasury-document-pdf-analyzed/B4DZr6H2rUGgAk-/0/1765132956440?e=1767225600&v=beta&t=H3LYCjRTuhvM9ELCk3yrNEp6VgVG28DgtGMXvuRc7hA" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                  Match & Start - Start for Future, 2024
                </a>
              </li>
              <li>
                <a href="https://media.licdn.com/dms/document/media/v2/D4E2DAQE1afRCKyjopA/profile-treasury-document-pdf-analyzed/B4EZtPjdLhIwAk-/0/1766566265045?e=1767225600&v=beta&t=pwdpdWRpJuq-5AqzUUDSZMnaSSN9KoJiLF5IkoMO_gw" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                  Quantum Computing & Programming - QWorld, 2024
                </a>
              </li>
            </ul>
            
            {/* Button to open modal */}
            <button 
              onClick={handleOpen}
              className="flex items-center gap-3 text-sm text-gray-400 mt-2 pt-4 border-t border-gray-800 hover:text-red-400 transition-colors cursor-pointer"
            >
              Show all 7 licenses & certifications →
            </button>
        </div>

        {/* Material-UI Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="certifications-modal-title"
          aria-describedby="certifications-modal-description"
        >
          <Box sx={modalStyle}>
            <h2 id="certifications-modal-title" className="text-2xl font-bold text-white mb-4">
              All Certifications
            </h2>
            <div id="certifications-modal-description" className="text-zinc-300">
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://media.licdn.com/dms/document/media/v2/D4D2DAQHnNwkzZehQMA/profile-treasury-document-pdf-analyzed/B4DZr6H2rUGgAk-/0/1765132956440?e=1767225600&v=beta&t=H3LYCjRTuhvM9ELCk3yrNEp6VgVG28DgtGMXvuRc7hA" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    Match & Start - Start for Future, 2024
                  </a>
                </li>
                <li>
                  <a href="https://media.licdn.com/dms/document/media/v2/D4E2DAQE1afRCKyjopA/profile-treasury-document-pdf-analyzed/B4EZtPjdLhIwAk-/0/1766566265045?e=1767225600&v=beta&t=pwdpdWRpJuq-5AqzUUDSZMnaSSN9KoJiLF5IkoMO_gw" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    Quantum Computing & Programming - QWorld, 2024
                  </a>
                </li>

                <li>
                  <a href="https://www.codehub.gr/wp-content/uploads/2024/02/Certificate-of-Completion-24C015206-Univators-Skilling-Future-Digital-Innovators-Christos-Tsalidis.pdf" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    Univators | Skilling Future Digital Innovators - Code.Hub, 2024
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/christos-tsalidis/details/certifications/1714587381825/single-media-viewer/?profileId=ACoAAEiSq2cBPXfZXmDdgGjDetVCR4jDwYlOi9Y" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    Ethical Hacking Seminar (8h) - Audax Cybersecurity, 2022
                  </a>
                </li>

                <li>
                  <a href="https://media.licdn.com/dms/document/media/v2/D4D2DAQE7hGe3WDbWwQ/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1714587839749?e=1767225600&v=beta&t=lsE5VqGLGwrJILhnHvc0IineR3Rsz22OovpgeP1Gytw" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                    Python for Non-Programmers - Aristotle University of Thessaloniki (AUTH), 2020
                  </a>
                </li>
              </ul>
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2 text-white rounded-lg hover:bg-red-600 transition-colors">Close
              </button>
            </div>
          </Box>
        </Modal>
    </motion.section>
  );
}